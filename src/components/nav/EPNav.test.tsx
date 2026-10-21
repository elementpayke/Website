import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EPNav from "./EPNav";

describe("EPNav", () => {
  test("renders the brand link to home", () => {
    render(<EPNav />);
    expect(screen.getByRole("link", { name: /ElementPay/ })).toHaveAttribute(
      "href",
      "/",
    );
  });

  test("renders all top-level menu buttons plus a Blog link and CTA", () => {
    render(<EPNav />);
    for (const label of ["Platform", "Products", "Solutions", "Resources", "Company"]) {
      expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
      "href",
      "/blog",
    );
    expect(screen.getByRole("link", { name: "Talk to sales" })).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  test("clicking a menu button reveals its items", async () => {
    const user = userEvent.setup();
    render(<EPNav />);
    await user.click(screen.getByRole("button", { name: "Products" }));
    expect(screen.getByText("Settlement and FX")).toBeInTheDocument();
  });

  test("highlights the active top-level menu", () => {
    render(<EPNav active="Resources" />);
    expect(screen.getByRole("button", { name: "Resources" })).toHaveStyle({
      color: "#3B2ED3",
    });
  });
});
