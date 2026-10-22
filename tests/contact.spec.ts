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
    await expect(page.getByLabel("Work email", { exact: true })).toHaveValue("jane@acme.com");
  });

  test("submitting the form shows a confirmation", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel("Full name").fill("Jane Doe");
    await page.getByLabel("Work email", { exact: true }).fill("jane@acme.com");
    await page.getByLabel("Company").fill("Acme Ltd");
    await page.getByRole("button", { name: "Send to the team" }).click();
    await expect(page.getByText("Thanks, Jane Doe.")).toBeVisible();
  });

  test("Talk to sales CTAs across the site link to a real page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Talk to sales" }).first().click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.locator("h1")).toBeVisible();
  });
});
