import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, position, message, formType } = body as Record<string, unknown>;

  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !EMAIL_RE.test(email) ||
    typeof message !== "string" || !message.trim()
  ) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Contact form is not yet configured. Please email us directly." },
      { status: 500 },
    );
  }

  const to = formType === "career"
    ? process.env.CONTACT_TO_CAREER || "career@seablueshipyard.com"
    : process.env.CONTACT_TO_GENERAL || "enquiry@seablueshipyard.com";

  const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  const resend = new Resend(apiKey);

  const subject = formType === "career"
    ? `Careers enquiry from ${name}`
    : `Website enquiry from ${name}`;

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(String(phone))}</p>` : ""}
    ${position ? `<p><strong>Position of interest:</strong> ${escapeHtml(String(position))}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: `Sea Blue Shipyard Website <${from}>`,
      to,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
