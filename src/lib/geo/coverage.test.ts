import { describe, expect, test } from "vitest";
import { COUNTRIES, GLOBAL_CURRENCIES, AFRICAN_COUNTRY_COUNT, accountCurrencies, countryBySlug } from "./coverage";

describe("COUNTRIES", () => {
  test("has 10 confirmed African payout countries plus Argentina and Colombia", () => {
    expect(AFRICAN_COUNTRY_COUNT).toBe(10);
    expect(COUNTRIES.length).toBe(12);
  });

  test("every slug and iso is unique", () => {
    expect(new Set(COUNTRIES.map((c) => c.slug)).size).toBe(COUNTRIES.length);
    expect(new Set(COUNTRIES.map((c) => c.iso)).size).toBe(COUNTRIES.length);
  });

  test("every country has at least one rail and no banned speed claims", () => {
    for (const c of COUNTRIES) {
      expect(c.rails.length).toBeGreaterThan(0);
      expect(c.aboutPara).toBeTruthy();
      expect(c.aboutPara.toLowerCase()).not.toMatch(/\d\s*seconds?\b|\binstant\b|under a minute|24\/7/);
      for (const r of c.rails) {
        expect(r.desc.toLowerCase()).not.toMatch(/\d\s*seconds?\b|\binstant\b|under a minute|24\/7/);
      }
    }
  });

  test("countryBySlug resolves a known country", () => {
    expect(countryBySlug("kenya")?.currencyCode).toBe("KES");
  });
});

describe("GLOBAL_CURRENCIES", () => {
  test("has 23 global account currencies", () => {
    expect(GLOBAL_CURRENCIES.length).toBe(23);
  });
});

describe("accountCurrencies", () => {
  test("has exactly 30 currency-account pages (23 global + 7 African)", () => {
    const list = accountCurrencies();
    expect(list.length).toBe(30);
    expect(new Set(list.map((c) => c.code)).size).toBe(30);
  });
});
