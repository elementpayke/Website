import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BlogGrid from "./BlogGrid";
import type { Article } from "@/lib/blog/articles";

const articles: Article[] = [
  {
    slug: "a-guide",
    cat: "Guides",
    flag: "ke",
    date: "Jan 1, 2026",
    read: "3 min",
    title: "A guide article",
    desc: "A guide description",
    tags: ["Guide tag"],
    body: [["p", "x"]],
  },
  {
    slug: "a-stablecoin",
    cat: "Stablecoins",
    flag: "us",
    date: "Jan 2, 2026",
    read: "4 min",
    title: "A stablecoin article",
    desc: "A stablecoin description",
    tags: ["Stable tag"],
    body: [["p", "x"]],
  },
];

describe("BlogGrid", () => {
  test("renders a card per article", () => {
    render(<BlogGrid articles={articles} />);
    expect(screen.getByText("A guide article")).toBeInTheDocument();
    expect(screen.getByText("A stablecoin article")).toBeInTheDocument();
  });

  test("filters by category chip", async () => {
    const user = userEvent.setup();
    render(<BlogGrid articles={articles} />);
    await user.click(screen.getByRole("button", { name: "Stablecoins" }));
    expect(screen.getByText("A stablecoin article")).toBeInTheDocument();
    expect(screen.queryByText("A guide article")).not.toBeInTheDocument();
  });

  test("filters by search query and shows empty state when nothing matches", async () => {
    const user = userEvent.setup();
    render(<BlogGrid articles={articles} />);
    const search = screen.getByPlaceholderText("Search guides");
    await user.type(search, "stablecoin");
    expect(screen.getByText("A stablecoin article")).toBeInTheDocument();
    expect(screen.queryByText("A guide article")).not.toBeInTheDocument();

    await user.clear(search);
    await user.type(search, "no such thing");
    expect(screen.getByText(/No guides match/)).toBeInTheDocument();
  });

  test("card links point to /blog/<slug>", () => {
    render(<BlogGrid articles={articles} />);
    expect(screen.getByRole("link", { name: /A guide article/ })).toHaveAttribute(
      "href",
      "/blog/a-guide",
    );
  });
});
