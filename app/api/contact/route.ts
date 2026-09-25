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