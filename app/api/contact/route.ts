import { NextRequest, NextResponse } from "next/server";

// This route receives the contact form submission from components/ContactForm.tsx.
//
// It is currently a stub: it validates the input and logs it. To actually
// deliver these messages to info@queticosuperiorresources.com, connect an
// email API (e.g. Resend, SendGrid, Postmark) here. Example using Resend:
//
//   import { Resend } from "resend";
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from: "Quetico Superior Website <website@queticosuperiorresources.com>",
//     to: "info@queticosuperiorresources.com",
//     replyTo: email,
//     subject: `Website inquiry: ${subject}`,
//     text: message,
//   });
//
// Remember to add the provider's API key as an environment variable
// (e.g. in Vercel project settings) rather than committing it to the repo.

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // TODO: replace with a real email-sending call (see comment above).
    console.log("New contact form submission:", { name, email, subject, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
