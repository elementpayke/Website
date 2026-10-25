import { test, expect } from "@playwright/test";

test.describe("Imported design pages", () => {
  test("French pages are served in French with hreflang pairs", async ({ page }) => {
    const response = await page.goto("/fr/envoyer-de-l-argent-au-senegal");
    expect(response?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", "fr");
    await expect(page.locator("h1")).toContainText("Sénégal");
    for (const [lang, href] of [
      ["en", "https://www.elementpay.net/send-money-to-senegal"],
      ["fr", "https://www.elementpay.net/fr/envoyer-de-l-argent-au-senegal"],
      ["x-default", "https://www.elementpay.net/send-money-to-senegal"],
    ]) {
      await expect(page.locator(`link[rel="alternate"][hreflang="${lang}"]`)).toHaveAttribute("href", href);
    }
  });

  test("country, corridor and account pages render with their structured data", async ({ page }) => {
    for (const path of ["/send-money-to-kenya", "/send-money-from-uk-to-kenya", "/open-a-xof-account", "/elementpay-vs-swift-wire"]) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(200);
      await expect(page.locator("h1")).toBeVisible();
      expect(await page.locator('script[type="application/ld+json"]').count(), path).toBeGreaterThan(0);
      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(scrollWidth, path).toBeLessThanOrEqual(clientWidth);
    }
  });

  test("legacy hash links from the old site land on the new pages", async ({ page }) => {
    await page.goto("/#contact");
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("unknown pages return 404", async ({ page }) => {
    const response = await page.goto("/not-a-real-page");
    expect(response?.status()).toBe(404);
  });
});
