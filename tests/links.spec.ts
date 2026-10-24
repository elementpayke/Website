import { test, expect } from "@playwright/test";

const PRIORITY = ["/stablecoin-payments-api", "/for-global-merchants", "/why-elementpay"];

test.describe("Link crawl", () => {
  for (const path of PRIORITY) {
    test(`${path} returns 200 with H1`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.locator('script[type="application/ld+json"]').first()).toBeAttached();
    });
  }

  test("every internal nav and footer link from home returns 200", async ({ page, request }) => {
    await page.goto("/");
    const hrefs = await page.evaluate(() => {
      const out = new Set<string>();
      document.querySelectorAll("a[href]").forEach((a) => {
        const href = a.getAttribute("href");
        if (!href) return;
        if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) return;
        out.add(href.split("?")[0].split("#")[0]);
      });
      return [...out].sort();
    });

    expect(hrefs.length).toBeGreaterThan(20);

    const failures: string[] = [];
    for (const href of hrefs) {
      const res = await request.get(href);
      if (res.status() !== 200) failures.push(`${href} → ${res.status()}`);
    }
    expect(failures, failures.join("\n")).toEqual([]);
  });
});
