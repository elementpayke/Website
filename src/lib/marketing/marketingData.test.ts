import { describe, expect, test } from "vitest";
import { ALL_MARKETING_PAGES, getMarketingPage } from "./pagesData";
import { SOLUTION_LIST } from "./solutionsData";

const REQUIRED = [
  "/stablecoin-payments-api",
  "/for-global-merchants",
  "/why-elementpay",
  "/coverage",
  "/about",
  "/pricing",
];

describe("marketing pages", () => {
  test("covers every required public route", () => {
    for (const path of REQUIRED) {
      expect(getMarketingPage(path)?.path).toBe(path);
    }
  });

  test("every page has SEO, specs, features and in-short copy", () => {
    for (const page of ALL_MARKETING_PAGES) {
      expect(page.seo.title.length).toBeGreaterThan(10);
      expect(page.seo.description.length).toBeGreaterThan(40);
      expect(page.specs.length).toBeGreaterThan(0);
      expect(page.features.length).toBeGreaterThan(0);
      expect(page.inShort.length).toBeGreaterThan(20);
      expect(page.path.startsWith("/")).toBe(true);
    }
  });

  test("includes all nine solutions", () => {
    expect(SOLUTION_LIST).toHaveLength(9);
  });
});
