import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Home page", () => {
  test("renders a single h1 heading with the site name", () => {
    render(<Page />);
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent("Coverage v3");
  });

  test("renders a status message indicating the build is in progress", () => {
    render(<Page />);
    expect(screen.getByText(/in progress/i)).toBeInTheDocument();
  });
});
