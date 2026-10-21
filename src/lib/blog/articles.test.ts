import { describe, expect, test } from "vitest";
import { ARTICLES, getArticleBySlug } from "./articles";

describe("ARTICLES", () => {
  test("has a non-empty list of articles with required fields", () => {
    expect(ARTICLES.length).toBeGreaterThan(0);
    for (const article of ARTICLES) {
      expect(article.slug).toBeTruthy();
      expect(article.title).toBeTruthy();
      expect(article.desc).toBeTruthy();
      expect(article.cat).toBeTruthy();
      expect(article.date).toBeTruthy();
      expect(article.read).toBeTruthy();
      expect(Array.isArray(article.tags)).toBe(true);
      expect(Array.isArray(article.body)).toBe(true);
      expect(article.body.length).toBeGreaterThan(0);
    }
  });

  test("every slug is unique", () => {
    const slugs = ARTICLES.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  test("getArticleBySlug finds a known article", () => {
    const article = getArticleBySlug("send-money-uk-to-kenya");
    expect(article?.title).toMatch(/UK to Kenya/);
  });

  test("getArticleBySlug returns undefined for an unknown slug", () => {
    expect(getArticleBySlug("does-not-exist")).toBeUndefined();
  });
});
