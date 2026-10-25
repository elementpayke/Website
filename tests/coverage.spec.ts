import { test, expect } from "@playwright/test";

test.describe("Coverage page", () => {
  test("map views, country selection and the directory search", async ({ page }) => {
    await page.goto("/coverage");
    await expect(page.locator("h1")).toContainText("Where money moves");
    const map = page.locator('[data-screen-label="Map"]');
    await expect(map.locator('path[data-id="686"]')).toBeAttached();

    // Payouts view: clicking a payout country updates the panel.
    await map.locator('path[data-id="686"]').dispatchEvent("click");
    await expect(map.getByRole("link", { name: "Send money to Senegal →" })).toBeVisible();

    // Accounts view keeps the selection's currency (XOF for Senegal).
    await page.getByRole("button", { name: "Bank accounts · World" }).click();
    await expect(map.getByRole("link", { name: "Open a XOF account →" })).toBeVisible();

    await page.getByRole("button", { name: "Stablecoin corridors" }).click();
    await expect(map.getByText("Fund in digital dollars. Deliver in local currency.")).toBeVisible();

    // Directory search narrows the payout countries.
    await page.getByLabel("Search payout countries").fill("Wave");
    const directory = page.locator('[data-screen-label="Payout countries"]');
    await expect(directory.getByRole("link", { name: /Senegal/ })).toBeVisible();
    await expect(directory.getByRole("link", { name: /Kenya/ })).toHaveCount(0);
  });

  test("countries are selectable from the keyboard and search ignores accents", async ({ page }) => {
    await page.goto("/coverage");
    const map = page.locator('[data-screen-label="Map"]');
    const ghana = map.getByRole("button", { name: "Ghana, payouts in GHS" });
    await ghana.focus();
    await page.keyboard.press("Enter");
    await expect(ghana).toHaveAttribute("aria-pressed", "true");
    await expect(map.getByRole("link", { name: "Send money to Ghana →" })).toBeVisible();

    await page.getByLabel("Search payout countries").fill("cote");
    const directory = page.locator('[data-screen-label="Payout countries"]');
    await expect(directory.getByRole("link", { name: /Côte d’Ivoire/ })).toBeVisible();
  });

  test("has no horizontal overflow", async ({ page }) => {
    await page.goto("/coverage");
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});
