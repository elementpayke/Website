import { test, expect } from "@playwright/test";

test("home page renders the real ElementPay hero", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Money should move like messages");
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

test("hero scene dots switch scenes", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(/01 · Collect and pay out/)).toBeVisible();
  await page.getByRole("button", { name: "Bulk payouts" }).click();
  await expect(page.getByText(/03 · Bulk payouts/)).toBeVisible();
});

test("coverage region tabs filter stops", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "West Africa" }).click();
  await expect(page.locator('[data-screen-label="Coverage"]').getByText("Nigeria")).toBeVisible();
});

test("FAQ accordion expands an answer", async ({ page }) => {
  await page.goto("/");
  await page.getByText("What does ElementPay do?").click();
  await expect(page.locator('[data-screen-label="FAQ"]').getByText(/payment infrastructure for businesses/)).toBeVisible();
});

test("navigating to the blog from the home page works", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "All articles →" }).click();
  await expect(page).toHaveURL(/\/blog$/);
  await expect(page.locator("h1")).toHaveText("Field notes on moving money");
});
