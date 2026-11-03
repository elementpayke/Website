import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { EmailNotConfiguredError, sendNotificationEmail } from "./email";

describe("sendNotificationEmail", () => {
  beforeEach(() => {
    vi.stubEnv("EMAIL_PROVIDER", "");
    vi.stubEnv("SENDGRID_API_KEY", "");
    vi.stubEnv("SENDGRID_FROM_EMAIL", "");
    vi.stubEnv("BREVO_API_KEY", "");
    vi.stubEnv("BREVO_FROM_EMAIL", "");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(null, { status: 202 })));
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  const params = {
    to: "inbox@example.com",
    subject: "New message",
    text: "Hello",
    replyTo: { email: "sender@example.com", name: "Sender" },
  };

  it("uses SendGrid when only SendGrid is configured", async () => {
    vi.stubEnv("SENDGRID_API_KEY", "sendgrid-key");
    vi.stubEnv("SENDGRID_FROM_EMAIL", "verified@example.com");

    await sendNotificationEmail(params);

    expect(fetch).toHaveBeenCalledWith(
      "https://api.sendgrid.com/v3/mail/send",
      expect.objectContaining({
        headers: {
          Authorization: "Bearer sendgrid-key",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: params.to }] }],
          from: { email: "verified@example.com", name: "ElementPay Website" },
          reply_to: params.replyTo,
          subject: params.subject,
          content: [{ type: "text/plain", value: params.text }],
        }),
      }),
    );
  });

  it("uses Brevo when only Brevo is configured", async () => {
    vi.stubEnv("BREVO_API_KEY", "brevo-key");
    vi.stubEnv("BREVO_FROM_EMAIL", "verified@example.com");

    await sendNotificationEmail(params);

    expect(fetch).toHaveBeenCalledWith(
      "https://api.brevo.com/v3/smtp/email",
      expect.objectContaining({
        headers: {
          "api-key": "brevo-key",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: { email: "verified@example.com", name: "ElementPay Website" },
          to: [{ email: params.to }],
          replyTo: params.replyTo,
          subject: params.subject,
          textContent: params.text,
        }),
      }),
    );
  });

  it("adds cc recipients for both providers", async () => {
    vi.stubEnv("SENDGRID_API_KEY", "sendgrid-key");
    vi.stubEnv("SENDGRID_FROM_EMAIL", "verified@example.com");

    await sendNotificationEmail({ ...params, cc: ["copy@example.com"] });

    const sendgridBody = JSON.parse(vi.mocked(fetch).mock.calls[0][1]!.body as string);
    expect(sendgridBody.personalizations).toEqual([
      { to: [{ email: params.to }], cc: [{ email: "copy@example.com" }] },
    ]);

    vi.stubEnv("SENDGRID_API_KEY", "");
    vi.stubEnv("BREVO_API_KEY", "brevo-key");
    vi.stubEnv("BREVO_FROM_EMAIL", "verified@example.com");

    await sendNotificationEmail({ ...params, cc: ["copy@example.com"] });

    const brevoBody = JSON.parse(vi.mocked(fetch).mock.calls[1][1]!.body as string);
    expect(brevoBody.cc).toEqual([{ email: "copy@example.com" }]);
  });

  it("uses EMAIL_PROVIDER to choose when both providers are configured", async () => {
    vi.stubEnv("EMAIL_PROVIDER", "brevo");
    vi.stubEnv("SENDGRID_API_KEY", "sendgrid-key");
    vi.stubEnv("SENDGRID_FROM_EMAIL", "sendgrid@example.com");
    vi.stubEnv("BREVO_API_KEY", "brevo-key");
    vi.stubEnv("BREVO_FROM_EMAIL", "brevo@example.com");

    await sendNotificationEmail(params);

    expect(fetch).toHaveBeenCalledWith(
      "https://api.brevo.com/v3/smtp/email",
      expect.any(Object),
    );
  });

  it("requires a provider selection when both API keys are configured", async () => {
    vi.stubEnv("SENDGRID_API_KEY", "sendgrid-key");
    vi.stubEnv("BREVO_API_KEY", "brevo-key");

    await expect(sendNotificationEmail(params)).rejects.toThrow(
      EmailNotConfiguredError,
    );
    expect(fetch).not.toHaveBeenCalled();
  });

  it("reports missing credentials for the selected provider", async () => {
    vi.stubEnv("EMAIL_PROVIDER", "brevo");

    await expect(sendNotificationEmail(params)).rejects.toThrow(
      "missing BREVO_API_KEY or BREVO_FROM_EMAIL",
    );
    expect(fetch).not.toHaveBeenCalled();
  });
});
