import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArticleToc from "./ArticleToc";

describe("ArticleToc", () => {
  const toc = [
    { id: "sec-0", label: "First heading" },
    { id: "sec-1", label: "Second heading" },
  ];

  test("renders a button per toc entry", () => {
    render(<ArticleToc toc={toc} tags={["USDC"]} />);
    expect(screen.getByRole("button", { name: "First heading" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Second heading" })).toBeInTheDocument();
  });

  test("renders the tags", () => {
    render(<ArticleToc toc={toc} tags={["USDC", "Kenya"]} />);
    expect(screen.getByText("USDC")).toBeInTheDocument();
    expect(screen.getByText("Kenya")).toBeInTheDocument();
  });

  test("clicking an entry scrolls the matching heading into view", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <ArticleToc toc={toc} tags={[]} />
        <h2 id="sec-1">Second heading</h2>
      </div>,
    );
    const heading = screen.getByRole("heading", { name: "Second heading" });
    const scrollSpy = vi.fn();
    heading.scrollIntoView = scrollSpy;
    await user.click(screen.getByRole("button", { name: "Second heading" }));
    expect(scrollSpy).toHaveBeenCalled();
  });
});
