const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";

export class EmailNotConfiguredError extends Error {}

export async function sendNotificationEmail(params: {
  to: string;
  subject: string;
  text: string;
  replyTo?: { email: string; name?: string };
}): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    throw new EmailNotConfiguredError(
      "Email delivery is not configured (missing SENDGRID_API_KEY or SENDGRID_FROM_EMAIL).",
    );
  }

  const res = await fetch(SENDGRID_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: params.to }] }],
      from: { email: fromEmail, name: "ElementPay Website" },
      ...(params.replyTo ? { reply_to: params.replyTo } : {}),
      subject: params.subject,
      content: [{ type: "text/plain", value: params.text }],
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`SendGrid request failed (${res.status}): ${body.slice(0, 500)}`);
  }
}
