import { describe, expect, test } from "vitest";
import sitemap from "./sitemap";
import { SITE_URL } from "@/lib/site";
import { ARTICLES } from "@/lib/blog/articles";
import { PRODUCTS } from "@/lib/products/productsData";

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
});
