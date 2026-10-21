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
    expect(screen.getByText(/01 · Collect and pay out/)).toBeInTheDocument();
  });

  test("clicking a scene dot jumps to that scene", async () => {
    const user = userEvent.setup();
    render(<HeroScene />);
    await user.click(screen.getByRole("button", { name: "Bulk payouts" }));
    expect(screen.getByText(/03 · Bulk payouts/)).toBeInTheDocument();
  });

  test("auto-advances to the next scene over time", () => {
    vi.useFakeTimers();
    render(<HeroScene />);
    expect(screen.getByText(/01 · Collect and pay out/)).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(4600);
    });
    expect(screen.getByText(/02 · Where we reach/)).toBeInTheDocument();
  });
});
