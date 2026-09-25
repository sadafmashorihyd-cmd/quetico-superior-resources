import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// This route receives the contact form submission from components/ContactForm.tsx
// and emails it using Resend (https://resend.com).
//
// Required environment variables (set in Vercel -> Project -> Settings ->
// Environment Variables, NOT committed to the repo):
//
//   RESEND_API_KEY     - API key from your Resend account
//   CONTACT_TO_EMAIL   - where submissions should be delivered
//                        (e.g. info@queticosuperiorresources.com once that
//                        mailbox exists; until then, point it at a working
//                        inbox such as a Gmail address)
//   CONTACT_FROM_EMAIL - optional. The "from" address Resend sends as. Must
//                        be on a domain verified in Resend. Defaults to
//                        Resend's shared "onboarding@resend.dev" sender,
//                        which works immediately with no domain setup but is
//                        best replaced with a queticosuperiorresources.com
//                        address once that domain is verified in Resend.
//
// If RESEND_API_KEY is not set, the route falls back to logging only (as
// before), so the site still builds and the form still "works" without an
// API key configured -- it just will not deliver anything.

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `
  <div style="background-color:#0b1220;padding:32px 16px;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;border-collapse:collapse;">
      <tr>
        <td style="padding:0 0 24px 0;text-align:center;">
          <span style="font-family:Georgia,'Times New Roman',serif;font-size:20px;letter-spacing:1px;color:#e8c468;text-transform:uppercase;">
            Quetico Superior Resources Inc.
          </span>
        </td>
      </tr>
      <tr>
        <td style="background-color:#0f172a;border:1px solid rgba(232,196,104,0.25);padding:32px;">
          <p style="margin:0 0 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#e8c468;">
            New Website Inquiry
          </p>
          <h1 style="margin:4px 0 24px 0;font-family:Georgia,'Times New Roman',serif;font-size:22px;color:#f5f1e8;">
            ${safeSubject}
          </h1>

          <table role="presentation" width="100%" style="border-collapse:collapse;margin-bottom:20px;">
            <tr>
              <td style="padding:8px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#8c94a6;width:90px;vertical-align:top;">
                Name
              </td>
              <td style="padding:8px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#f5f1e8;">
                ${safeName}
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#8c94a6;vertical-align:top;border-top:1px solid rgba(255,255,255,0.08);">
                Email
              </td>
              <td style="padding:8px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#f5f1e8;border-top:1px solid rgba(255,255,255,0.08);">
                <a href="mailto:${safeEmail}" style="color:#e8c468;text-decoration:none;">${safeEmail}</a>
              </td>
            </tr>
          </table>

          <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:20px;">
            <p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#8c94a6;">
              Message
            </p>
            <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:1.6;color:#d7dbe3;">
              ${safeMessage}
            </p>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 8px 0 8px;text-align:center;">
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#5b6272;">
            Sent from the contact form at queticosuperiorresources.com
          </p>
        </td>
      </tr>
    </table>
  </div>`;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!resend) {
      console.log("New contact form submission (no RESEND_API_KEY set):", {
        name,
        email,
        subject,
        message,
      });
      return NextResponse.json({ ok: true });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    if (!toEmail) {
      console.error("CONTACT_TO_EMAIL is not set.");
      return NextResponse.json(
        { error: "Server is not configured to send messages yet." },
        { status: 500 }
      );
    }

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    const { error } = await resend.emails.send({
      from: `Quetico Superior Website <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Website inquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: buildEmailHtml({ name, email, subject, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}