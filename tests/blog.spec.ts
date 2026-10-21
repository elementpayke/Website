import { test, expect } from "@playwright/test";

test.describe("Blog index", () => {
  test("renders hero, featured article and grid", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.locator("h1")).toHaveText("Field notes on moving money");
    await expect(page.getByText("Featured")).toBeVisible();
    await expect(page.getByRole("button", { name: "Stablecoins" })).toBeVisible();
  });

  test("filters articles by category", async ({ page }) => {
    await page.goto("/blog");
    await page.getByRole("button", { name: "Markets" }).click();
    await expect(page.getByText("Mobile money in West Africa")).toBeVisible();
    await expect(page.getByText("Running payroll across several African countries")).toHaveCount(0);
  });

  test("searching narrows the grid and shows an empty state", async ({ page }) => {
    await page.goto("/blog");
    await page.getByPlaceholder("Search guides").fill("zzz-no-match-zzz");
    await expect(page.getByText(/No guides match/)).toBeVisible();
  });

  test("navigates from the featured card into the article", async ({ page }) => {
    await page.goto("/blog");
    await page.getByText("Featured").click();
    await expect(page).toHaveURL(/\/blog\/usdt-to-mpesa-for-business/);
    await expect(page.locator("h1")).toContainText("How businesses convert USDT to M-Pesa in Kenya");
  });

  test("has no horizontal overflow at this viewport", async ({ page }) => {
    await page.goto("/blog");
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});

test.describe("Blog article", () => {
  test("renders the article with TOC, body and keep reading links", async ({ page }) => {
    await page.goto("/blog/send-money-uk-to-kenya");
    await expect(page.locator("h1")).toContainText("How to send money from the UK to Kenya");
    await expect(page.getByRole("button", { name: "Kenya runs on mobile money" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Keep reading." })).toBeVisible();
  });

  test("clicking a TOC entry scrolls the matching heading into view", async ({ page }) => {
    await page.goto("/blog/send-money-uk-to-kenya");
    await page.getByRole("button", { name: "Funding with stablecoins" }).click();
    await expect(page.locator("#sec-3")).toBeInViewport();
  });

  test("has no horizontal overflow at this viewport", async ({ page }) => {
    await page.goto("/blog/send-money-uk-to-kenya");
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });

  test("a non-existent slug returns 404", async ({ page }) => {
    const response = await page.goto("/blog/does-not-exist");
    expect(response?.status()).toBe(404);
  });
});
