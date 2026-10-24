import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FaqSection from "./FaqSection";

describe("FaqSection", () => {
  test("renders a question per FAQ and starts collapsed", () => {
    render(<FaqSection />);
    expect(screen.getByText("What does ElementPay do?")).toBeInTheDocument();
    expect(screen.queryByText(/payment infrastructure for businesses/)).not.toBeInTheDocument();
  });

  test("clicking a question expands its answer, and only one is open at a time", async () => {
    const user = userEvent.setup();
    render(<FaqSection />);
    await user.click(screen.getByText("What does ElementPay do?"));
    expect(screen.getByText(/payment infrastructure for businesses/)).toBeInTheDocument();

    await user.click(screen.getByText("Which markets do you cover?"));
    expect(screen.queryByText(/payment infrastructure for businesses/)).not.toBeInTheDocument();
    expect(screen.getByText(/Payouts reach 10\+ African countries/)).toBeInTheDocument();
  });

  test("clicking an open question closes it", async () => {
    const user = userEvent.setup();
    render(<FaqSection />);
    await user.click(screen.getByText("What does ElementPay do?"));
    await user.click(screen.getByText("What does ElementPay do?"));
    expect(screen.queryByText(/payment infrastructure for businesses/)).not.toBeInTheDocument();
  });
});
