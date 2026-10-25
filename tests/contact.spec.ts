import { test, expect } from "@playwright/test";

test.describe("Contact page", () => {
  test("renders with no horizontal overflow", async ({ page }) => {
    const response = await page.goto("/contact");
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });

  test("prefills the work email from the query string", async ({ page }) => {
    await page.goto("/contact?email=jane%40acme.com");
    await expect(page.getByLabel("Work email *", { exact: true })).toHaveValue("jane@acme.com");
  });

  test("submitting the form shows a confirmation", async ({ page }) => {
    let sent: Record<string, unknown> | null = null;
    await page.route("/api/contact", async (route) => {
      sent = route.request().postDataJSON();
      await route.fulfill({ json: { ok: true } });
    });
    await page.goto("/contact");
    await page.getByLabel("First name *", { exact: true }).fill("Jane");
    await page.getByLabel("Last name *", { exact: true }).fill("Doe");
    await page.getByLabel("Work email *", { exact: true }).fill("jane@acme.com");
    await page.getByLabel("Company name *", { exact: true }).fill("Acme Ltd");
    await page.getByRole("button", { name: "Payouts", exact: true }).click();
    await page.getByRole("button", { name: "Send to sales" }).click();
    await expect(page.getByText("Thanks, Jane.")).toBeVisible();
    expect(sent).toMatchObject({ name: "Jane Doe", email: "jane@acme.com", company: "Acme Ltd", need: "Payouts" });
  });

  test("asks for a need before sending", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel("First name *", { exact: true }).fill("Jane");
    await page.getByLabel("Last name *", { exact: true }).fill("Doe");
    await page.getByLabel("Work email *", { exact: true }).fill("jane@acme.com");
    await page.getByLabel("Company name *", { exact: true }).fill("Acme Ltd");
    await page.getByRole("button", { name: "Send to sales" }).click();
    await expect(page.getByText("Pick at least one thing you need.")).toBeVisible();
  });

  test("Talk to sales CTAs across the site link to a real page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Talk to sales" }).first().click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.locator("h1")).toBeVisible();
  });
});
