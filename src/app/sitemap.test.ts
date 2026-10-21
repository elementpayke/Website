import { describe, expect, test } from "vitest";
import sitemap from "./sitemap";
import { SITE_URL } from "@/lib/site";

describe("sitemap", () => {
  test("includes the home page", () => {
    const result = sitemap();
    expect(result.some((entry) => entry.url === SITE_URL)).toBe(true);
  });
});
