import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoverageSection from "./CoverageSection";

describe("CoverageSection", () => {
  test("defaults to East Africa stops", () => {
    render(<CoverageSection />);
    expect(screen.getByText("Kenya")).toBeInTheDocument();
    expect(screen.queryByText("Nigeria")).not.toBeInTheDocument();
  });

  test("switching region tab shows that region's stops", async () => {
    const user = userEvent.setup();
    render(<CoverageSection />);
    await user.click(screen.getByRole("button", { name: "West Africa" }));
    expect(screen.getByText("Nigeria")).toBeInTheDocument();
    expect(screen.queryByText("Kenya")).not.toBeInTheDocument();
  });

  test("bank account stops link to open-a-x-account routes", async () => {
    const user = userEvent.setup();
    render(<CoverageSection />);
    await user.click(screen.getByRole("button", { name: "Bank accounts" }));
    expect(screen.getByRole("link", { name: /US dollar/ })).toHaveAttribute("href", "/open-a-usd-account");
  });
});
