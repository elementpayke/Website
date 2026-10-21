import { test, expect } from "@playwright/test";

test("home page renders the Coverage v3 heading", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Coverage v3");
});

test("home page has no horizontal overflow at this viewport", async ({
  page,
}) => {
  await page.goto("/");
  const { scrollWidth, clientWidth } = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
});
