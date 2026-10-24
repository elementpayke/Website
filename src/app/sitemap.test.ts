import { describe, expect, test } from "vitest";
import sitemap from "./sitemap";
import { SITE_URL } from "@/lib/site";
import { ARTICLES } from "@/lib/blog/articles";
import { PRODUCTS } from "@/lib/products/productsData";
import { ALL_MARKETING_PAGES } from "@/lib/marketing/pagesData";

describe("sitemap", () => {
  test("includes the home page", () => {
    const result = sitemap();
    expect(result.some((entry) => entry.url === SITE_URL)).toBe(true);
  });

  test("includes every blog article and product page", () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const article of ARTICLES) {
      expect(urls).toContain(`${SITE_URL}/blog/${article.slug}`);
    }
    for (const product of Object.values(PRODUCTS)) {
      expect(urls).toContain(`${SITE_URL}${product.path}`);
    }
  });

  test("includes marketing pages and contact", () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toContain(`${SITE_URL}/contact`);
    for (const page of ALL_MARKETING_PAGES) {
      expect(urls).toContain(`${SITE_URL}${page.path}`);
    }
    expect(urls).toContain(`${SITE_URL}/stablecoin-payments-api`);
    expect(urls).toContain(`${SITE_URL}/for-global-merchants`);
    expect(urls).toContain(`${SITE_URL}/why-elementpay`);
  });
});
