import { describe, expect, test, vi, afterEach } from "vitest";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeroScene from "./HeroScene";

vi.mock("./EpGlobe", () => ({ default: () => <div data-testid="globe" /> }));

describe("HeroScene", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  test("shows the first scene by default", () => {
    render(<HeroScene />);
    expect(screen.getByText("Collections in, payouts out.")).toBeInTheDocument();
  });

  test("clicking a scene dot jumps to that scene", async () => {
    const user = userEvent.setup();
    render(<HeroScene />);
    await user.click(screen.getByRole("button", { name: "Bulk payouts from one file." }));
    expect(screen.getByText("Bulk payouts from one file.")).toBeInTheDocument();
  });

  test("auto-advances to the next scene over time", () => {
    vi.useFakeTimers();
    render(<HeroScene />);
    expect(screen.getByText("Collections in, payouts out.")).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(4600);
    });
    expect(screen.getByText("Payouts in 20 African countries. Accounts in 30 currencies.")).toBeInTheDocument();
  });
});
