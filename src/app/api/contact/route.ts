import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "hello@nervure.site";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Nervure Contact <contact@nervure.site>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Nervure] New message from ${name} — ${subject || "General inquiry"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #1a1a1a; color: #f5f3ee; border-radius: 12px;">
          <div style="margin-bottom: 32px;">
            <span style="color: #C5A059; font-size: 28px;">◆</span>
            <span style="font-size: 20px; font-weight: 300; letter-spacing: 0.1em; margin-left: 8px;">NERVURE</span>
          </div>
          <h1 style="font-size: 24px; font-weight: 300; margin-bottom: 24px; color: #f5f3ee;">New contact request</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 12px 0; color: #C5A059; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; width: 120px;">Name</td>
              <td style="padding: 12px 0; color: #f5f3ee;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 12px 0; color: #C5A059; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em;">Email</td>
              <td style="padding: 12px 0; color: #f5f3ee;"><a href="mailto:${email}" style="color: #C5A059;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 12px 0; color: #C5A059; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em;">Subject</td>
              <td style="padding: 12px 0; color: #f5f3ee;">${subject || "—"}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <td style="padding: 12px 0; color: #C5A059; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em;">Budget</td>
              <td style="padding: 12px 0; color: #f5f3ee;">${budget || "—"}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #C5A059; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 8px;">Message</p>
            <p style="color: #f5f3ee; line-height: 1.7; white-space: pre-wrap; background: rgba(255,255,255,0.05); padding: 16px; border-radius: 8px; border-left: 2px solid #C5A059;">${message}</p>
          </div>
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
            <a href="mailto:${email}" style="display: inline-block; background: #C5A059; color: #1a1a1a; padding: 12px 24px; border-radius: 999px; font-size: 14px; font-weight: 500; text-decoration: none;">Reply to ${name}</a>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
