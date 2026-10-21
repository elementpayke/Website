import { describe, expect, test } from "vitest";
import robots from "./robots";

describe("robots", () => {
  test("allows all crawlers and points at the sitemap", () => {
    const result = robots();
    expect(result.rules).toMatchObject({ userAgent: "*", allow: "/" });
    expect(result.sitemap).toMatch(/\/sitemap\.xml$/);
  });
});
