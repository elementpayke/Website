import { describe, expect, test } from "vitest";
import { buildArticleBlocks } from "./toc";
import type { Article } from "./articles";

const article: Article = {
  slug: "x",
  cat: "Guides",
  flag: "ke",
  date: "Jan 1, 2026",
  read: "3 min",
  title: "Title.",
  desc: "Desc",
  tags: ["a"],
  body: [
    ["h", "First heading"],
    ["p", "A paragraph"],
    ["ul", ["one", "two"]],
    ["h", "Second heading"],
    ["p", "Another paragraph"],
  ],
};

describe("buildArticleBlocks", () => {
  test("assigns sequential ids only to heading blocks", () => {
    const { blocks } = buildArticleBlocks(article);
    const headingBlocks = blocks.filter((b) => b.isH);
    expect(headingBlocks.map((b) => b.id)).toEqual(["sec-0", "sec-1"]);
    expect(blocks.find((b) => b.isP)?.id).toBe("");
  });

  test("builds a toc entry per heading in order", () => {
    const { toc } = buildArticleBlocks(article);
    expect(toc).toEqual([
      { id: "sec-0", label: "First heading" },
      { id: "sec-1", label: "Second heading" },
    ]);
  });

  test("preserves paragraph and list content", () => {
    const { blocks } = buildArticleBlocks(article);
    expect(blocks.find((b) => b.isP)?.text).toBe("A paragraph");
    expect(blocks.find((b) => b.isUl)?.items).toEqual(["one", "two"]);
  });
});
