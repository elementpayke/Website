import { describe, expect, test } from "vitest";
import robots from "./robots";

describe("robots", () => {
  test("allows all crawlers and points at the sitemap", () => {
    const result = robots();
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    expect(rules[0]).toMatchObject({ userAgent: "*", allow: "/" });
    expect(result.sitemap).toMatch(/\/sitemap\.xml$/);
  });

  test("explicitly allows AI crawlers", () => {
    const result = robots();
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    const aiRule = rules.find((r) => Array.isArray(r.userAgent) && r.userAgent.includes("GPTBot"));
    expect(aiRule).toBeDefined();
    expect(aiRule?.allow).toBe("/");
    expect(aiRule?.userAgent).toEqual(
      expect.arrayContaining(["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "Bingbot", "Applebot"])
    );
  });
});
