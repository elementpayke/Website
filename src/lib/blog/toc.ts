import type { Article } from "./articles";

export type ArticleBlock = {
  id: string;
  isH: boolean;
  isP: boolean;
  isUl: boolean;
  text: string;
  items: readonly string[];
};

export type TocEntry = { id: string; label: string };

export function buildArticleBlocks(article: Article): {
  blocks: ArticleBlock[];
  toc: TocEntry[];
} {
  let headingIndex = 0;
  const blocks: ArticleBlock[] = article.body.map(([kind, value]) => {
    const isH = kind === "h";
    const id = isH ? `sec-${headingIndex++}` : "";
    return {
      id,
      isH,
      isP: kind === "p",
      isUl: kind === "ul",
      text: kind === "ul" ? "" : (value as string),
      items: kind === "ul" ? (value as readonly string[]) : [],
    };
  });
  const toc: TocEntry[] = blocks
    .filter((b) => b.isH)
    .map((b) => ({ id: b.id, label: b.text }));
  return { blocks, toc };
}
