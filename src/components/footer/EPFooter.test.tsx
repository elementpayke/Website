import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EPFooter from "./EPFooter";

describe("EPFooter", () => {
  test("renders every footer column heading", () => {
    render(<EPFooter />);
    for (const heading of ["Platform", "Products", "Stablecoins", "Resources", "Company"]) {
      expect(screen.getByText(heading)).toBeInTheDocument();
    }
  });

  test("renders a Blog link under Resources pointing to /blog", () => {
    render(<EPFooter />);
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute("href", "/blog");
  });

  test("renders both office addresses", () => {
    render(<EPFooter />);
    expect(screen.getByText("Nairobi, Kenya")).toBeInTheDocument();
    expect(screen.getByText("Wilmington, DE, USA")).toBeInTheDocument();
  });

  test("subscribing to the newsletter shows a confirmation", async () => {
    const user = userEvent.setup();
    render(<EPFooter />);
    await user.type(screen.getByPlaceholderText("Work email"), "finance@example.com");
    await user.click(screen.getByRole("button", { name: "Subscribe" }));
    expect(screen.getByText(/You're subscribed/)).toBeInTheDocument();
  });
});
