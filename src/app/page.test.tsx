import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

vi.mock("@/components/home/EpGlobe", () => ({ default: () => <div data-testid="globe" /> }));
vi.mock("next/navigation", () => ({ useRouter: () => ({ push: vi.fn() }) }));

describe("Home page", () => {
  test("renders the real ElementPay hero heading", () => {
    render(<Page />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Money should move like messages");
  });

  test("renders the primary CTAs", () => {
    render(<Page />);
    const salesLinks = screen.getAllByRole("link", { name: "Talk to sales" });
    expect(salesLinks.length).toBeGreaterThan(0);
    for (const link of salesLinks) expect(link).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: "See the platform" })).toHaveAttribute("href", "#platform");
  });

  test("renders the nav, products grid and footer", () => {
    render(<Page />);
    expect(screen.getByRole("link", { name: "ElementPay" })).toHaveAttribute("href", "/");
    expect(screen.getByText("Everything your money needs to do.")).toBeInTheDocument();
    expect(screen.getByText("© 2026 ElementPay")).toBeInTheDocument();
  });
});
