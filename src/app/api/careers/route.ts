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

  const { name, email, team, link, note } = payload as Record<string, unknown>;

  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !EMAIL_RE.test(email)
  ) {
    return NextResponse.json({ error: "Missing or invalid required fields." }, { status: 400 });
  }

  const toEmail = process.env.CAREERS_TO_EMAIL || process.env.CONTACT_TO_EMAIL;
  if (!toEmail) {
    console.error("CAREERS_TO_EMAIL/CONTACT_TO_EMAIL is not configured; dropping careers application.");
    return NextResponse.json({ error: "Careers form is not configured." }, { status: 500 });
  }

  const text = [
    "New careers application from elementpay.net",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Team: ${typeof team === "string" && team ? team : "—"}`,
    `Link: ${typeof link === "string" && link.trim() ? link : "—"}`,
    `Note: ${typeof note === "string" && note.trim() ? note : "—"}`,
  ].join("\n");

  try {
    await sendNotificationEmail({
      to: toEmail,
      subject: `Careers application: ${name}${typeof team === "string" && team ? ` (${team})` : ""}`,
      text,
      replyTo: { email, name },
    });
  } catch (err) {
    if (err instanceof EmailNotConfiguredError) {
      console.error(err.message);
      return NextResponse.json({ error: "Careers form is not configured." }, { status: 500 });
    }
    console.error("Failed to send careers application email:", err);
    return NextResponse.json({ error: "Failed to send your application. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
