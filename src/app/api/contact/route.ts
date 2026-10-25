import { NextRequest, NextResponse } from "next/server";
import { EmailNotConfiguredError, sendNotificationEmail } from "@/lib/server/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof payload !== "object" || payload === null) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, need, message, role, website, headquarters, businessType, goLive } = payload as Record<string, unknown>;
  const opt = (v: unknown) => (typeof v === "string" && v.trim() ? v : "—");

  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !EMAIL_RE.test(email) ||
    typeof company !== "string" || !company.trim()
  ) {
    return NextResponse.json({ error: "Missing or invalid required fields." }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!toEmail) {
    console.error("CONTACT_TO_EMAIL is not configured; dropping contact form submission.");
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  const text = [
    "New contact form submission from elementpay.net",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Job title: ${opt(role)}`,
    `Company: ${company}`,
    `Website: ${opt(website)}`,
    `Headquarters: ${opt(headquarters)}`,
    `Business type: ${opt(businessType)}`,
    `Needs: ${opt(need)}`,
    `Go live: ${opt(goLive)}`,
    `Message: ${opt(message)}`,
  ].join("\n");

  try {
    await sendNotificationEmail({
      to: toEmail,
      subject: `Contact form: ${company} (${name})`,
      text,
      replyTo: { email, name },
    });
  } catch (err) {
    if (err instanceof EmailNotConfiguredError) {
      console.error(err.message);
      return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
    }
    console.error("Failed to send contact form email:", err);
    return NextResponse.json({ error: "Failed to send your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
