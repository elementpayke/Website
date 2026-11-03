const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";
const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

type EmailProvider = "sendgrid" | "brevo";

export class EmailNotConfiguredError extends Error {}

function getEmailConfig(): {
  provider: EmailProvider;
  apiKey: string;
  fromEmail: string;
} {
  const sendgridApiKey = process.env.SENDGRID_API_KEY;
  const brevoApiKey = process.env.BREVO_API_KEY;
  const configuredProvider = process.env.EMAIL_PROVIDER?.trim().toLowerCase();

  let provider: EmailProvider;
  if (configuredProvider) {
    if (configuredProvider !== "sendgrid" && configuredProvider !== "brevo") {
      throw new EmailNotConfiguredError(
        'Invalid EMAIL_PROVIDER. Use "sendgrid" or "brevo".',
      );
    }
    provider = configuredProvider;
  } else if (sendgridApiKey && brevoApiKey) {
    throw new EmailNotConfiguredError(
      'Both email API keys are configured; set EMAIL_PROVIDER to "sendgrid" or "brevo".',
    );
  } else {
    provider = brevoApiKey ? "brevo" : "sendgrid";
  }

  const apiKey = provider === "brevo" ? brevoApiKey : sendgridApiKey;
  const fromEmail =
    provider === "brevo"
      ? process.env.BREVO_FROM_EMAIL
      : process.env.SENDGRID_FROM_EMAIL;
  const missing = [
    !apiKey && `${provider === "brevo" ? "BREVO" : "SENDGRID"}_API_KEY`,
    !fromEmail && `${provider === "brevo" ? "BREVO" : "SENDGRID"}_FROM_EMAIL`,
  ].filter(Boolean);

  if (!apiKey || !fromEmail) {
    throw new EmailNotConfiguredError(
      `Email delivery is not configured (missing ${missing.join(" or ")}).`,
    );
  }

  return { provider, apiKey, fromEmail };
}

export async function sendNotificationEmail(params: {
  to: string;
  cc?: string[];
  subject: string;
  text: string;
  replyTo?: { email: string; name?: string };
}): Promise<void> {
  const { provider, apiKey, fromEmail } = getEmailConfig();
  const isBrevo = provider === "brevo";
  const cc = params.cc?.length ? params.cc.map((email) => ({ email })) : undefined;
  const res = await fetch(isBrevo ? BREVO_API_URL : SENDGRID_API_URL, {
    method: "POST",
    headers: {
      [isBrevo ? "api-key" : "Authorization"]: isBrevo
        ? apiKey
        : `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      isBrevo
        ? {
            sender: { email: fromEmail, name: "ElementPay Website" },
            to: [{ email: params.to }],
            ...(cc ? { cc } : {}),
            ...(params.replyTo ? { replyTo: params.replyTo } : {}),
            subject: params.subject,
            textContent: params.text,
          }
        : {
            personalizations: [{ to: [{ email: params.to }], ...(cc ? { cc } : {}) }],
            from: { email: fromEmail, name: "ElementPay Website" },
            ...(params.replyTo ? { reply_to: params.replyTo } : {}),
            subject: params.subject,
            content: [{ type: "text/plain", value: params.text }],
          },
    ),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`${provider} request failed (${res.status}): ${body.slice(0, 500)}`);
  }
}
