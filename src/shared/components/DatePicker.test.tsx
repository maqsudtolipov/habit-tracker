import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import DatePicker from "@/shared/components/DatePicker.tsx";

describe("<DatePicker />", () => {
  it("should render trigger button", () => {
    const formatted = new Date("2025-07-31").toLocaleDateString("en-US");

    render(<DatePicker value={new Date(formatted)} onChange={() => {}} />);

    const el = screen.getByRole("button", {
      name: `Pick a date. Currently selected: ${formatted}`,
    });
    expect(el).toBeInTheDocument();
  });

  it("should open and close when trigger button is clicked", () => {});

  it("should call onChange() fn when date is picked", () => {});
});
