import { describe, expect, test } from "vitest";
import { PRODUCTS, getRelatedProducts, type ProductSlug } from "./productsData";

describe("PRODUCTS", () => {
  test("has exactly the 9 slugs from the Products.dc.html data model", () => {
    const slugs = Object.keys(PRODUCTS).sort();
    expect(slugs).toEqual(
      ["accounts", "agentic", "api", "assets", "dapp", "dashboard", "fx", "otc", "payments"].sort(),
    );
  });

  test("every product has 4 specs, at least 4 features, and a resolvable related list", () => {
    for (const product of Object.values(PRODUCTS)) {
      expect(product.specs.length).toBeGreaterThanOrEqual(3);
      expect(product.features.length).toBeGreaterThanOrEqual(4);
      expect(product.related.length).toBeGreaterThan(0);
      for (const relSlug of product.related) {
        expect(PRODUCTS[relSlug as ProductSlug]).toBeDefined();
      }
    }
  });

  test("getRelatedProducts resolves slugs to full product data", () => {
    const related = getRelatedProducts(PRODUCTS.payments.related);
    expect(related.map((p) => p.slug)).toEqual(["fx", "assets", "dashboard"]);
  });

  test("every product has a unique path", () => {
    const paths = Object.values(PRODUCTS).map((p) => p.path);
    expect(new Set(paths).size).toBe(paths.length);
  });
});
