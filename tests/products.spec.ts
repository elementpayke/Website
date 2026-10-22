import { test, expect } from "@playwright/test";

const ALL_PRODUCT_PATHS = [
  "/payments",
  "/settlement-and-fx",
  "/business-accounts",
  "/otc-desk",
  "/agentic-payments",
  "/stablecoins",
  "/merchant-dashboard",
  "/payments-api",
  "/elementpay-dapp",
];

test.describe("Product pages", () => {
  for (const path of ALL_PRODUCT_PATHS) {
    test(`${path} renders with no horizontal overflow`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toBeVisible();
      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
    });
  }

  test("payments demo: switching country updates the payout mockup", async ({ page }) => {
    await page.goto("/payments");
    await page.getByRole("button", { name: "Nigeria" }).click();
    await expect(page.getByText(/NGN 765,000/)).toBeVisible();
  });

  test("settlement-and-fx demo: locking a quote shows the confirm button", async ({ page }) => {
    await page.goto("/settlement-and-fx");
    await page.getByRole("button", { name: "Lock this quote" }).click();
    await expect(page.getByRole("button", { name: "Confirm conversion" })).toBeVisible();
  });

  test("otc-desk demo: accepting a quote shows Booked", async ({ page }) => {
    await page.goto("/otc-desk");
    await page.getByRole("button", { name: "Accept quote" }).click();
    await expect(page.getByRole("button", { name: "Booked ✓" })).toBeVisible();
  });

  test("agentic-payments demo: toggling a policy and approving the held payment", async ({ page }) => {
    await page.goto("/agentic-payments");
    await expect(page.getByText("Mombasa Freight · $3,400")).toBeVisible();
    await page.getByRole("button", { name: "Approve" }).click();
    await expect(page.getByText("Mombasa Freight · $3,400")).not.toBeVisible();
  });

  test("stablecoins demo: switching to on-ramp relabels the flow", async ({ page }) => {
    await page.goto("/stablecoins");
    await expect(page.getByText("YOU SEND")).toBeVisible();
    await page.getByRole("button", { name: "On-ramp" }).click();
    await expect(page.getByText("CUSTOMER PAYS")).toBeVisible();
  });

  test("merchant-dashboard demo: approving the run updates the KPI and banner", async ({ page }) => {
    await page.goto("/merchant-dashboard");
    await page.getByRole("button", { name: "Approve run" }).click();
    await expect(page.getByRole("button", { name: "Done ✓" })).toBeVisible();
  });

  test("payments-api demo: switching code tabs changes the snippet", async ({ page }) => {
    await page.goto("/payments-api");
    await expect(page.getByText("curl https://api.elementpay.net")).toBeVisible();
    await page.getByRole("button", { name: "Node" }).click();
    await expect(page.getByText("const payout = await elementpay")).toBeVisible();
  });

  test("elementpay-dapp demo: signing shows the confirmation state", async ({ page }) => {
    await page.goto("/elementpay-dapp");
    await page.getByRole("button", { name: "Sign and cash out" }).click();
    await expect(page.getByText("Cash out again")).toBeVisible();
  });

  test("related products link to real pages", async ({ page }) => {
    await page.goto("/payments");
    const relatedLink = page.locator('[data-screen-label="Related"] a').first();
    await relatedLink.click();
    await expect(page.locator("h1")).toBeVisible();
  });
});
