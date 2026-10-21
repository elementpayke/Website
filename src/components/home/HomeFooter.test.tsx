import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomeFooter from "./HomeFooter";

describe("HomeFooter", () => {
  test("renders every footer column", () => {
    render(<HomeFooter />);
    for (const heading of ["Platform", "Products", "Resources", "Company"]) {
      expect(screen.getByText(heading)).toBeInTheDocument();
    }
  });

  test("newsletter subscribe shows a confirmation", async () => {
    const user = userEvent.setup();
    render(<HomeFooter />);
    await user.type(screen.getByPlaceholderText("Work email"), "ops@example.com");
    await user.click(screen.getByRole("button", { name: "Subscribe" }));
    expect(screen.getByText(/Subscribed/)).toBeInTheDocument();
  });
});
