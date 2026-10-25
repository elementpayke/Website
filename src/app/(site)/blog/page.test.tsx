import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogIndexPage from "./page";
import { ARTICLES } from "@/lib/blog/articles";

describe("Blog index page", () => {
  test("renders the hero heading", () => {
    render(<BlogIndexPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Field notes on moving money",
    );
  });

  test("renders the featured article with a Featured badge", () => {
    render(<BlogIndexPage />);
    expect(screen.getByText("Featured")).toBeInTheDocument();
    expect(screen.getByText(ARTICLES[0].title)).toBeInTheDocument();
  });

  test("renders a card for a non-featured article", () => {
    render(<BlogIndexPage />);
    expect(screen.getByText(ARTICLES[1].title)).toBeInTheDocument();
  });
});
