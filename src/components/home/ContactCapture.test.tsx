import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactCapture from "./ContactCapture";

const push = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
}));

describe("ContactCapture", () => {
  test("submitting with an email navigates to /contact with the email prefilled", async () => {
    const user = userEvent.setup();
    render(<ContactCapture />);
    await user.type(screen.getByPlaceholderText("Work email"), "finance@example.com");
    await user.click(screen.getByRole("button", { name: "Talk to sales" }));
    expect(push).toHaveBeenCalledWith("/contact?email=finance%40example.com");
  });
});
