import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import DatePicker from "@/shared/components/DatePicker.tsx";
import userEvent from "@testing-library/user-event";

describe("<DatePicker />", () => {
  it("should render trigger button", () => {
    const formatted = new Date("2025-07-31").toLocaleDateString("en-US");

    render(<DatePicker value={new Date(formatted)} onChange={() => {}} />);

    const el = screen.getByRole("button", {
      name: `Pick a date. Currently selected: ${formatted}`,
    });
    expect(el).toBeInTheDocument();
  });

  it("should open and close when trigger button is clicked", async () => {
    const user = userEvent.setup();
    render(<DatePicker value={new Date()} onChange={() => {}} />);

    const button = screen.getByRole("button", { name: /pick a date/i });

    // Open dialog
    await user.click(button);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    // Close dialog
    await user.click(button);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should call onChange() when a new date is selected", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    const initialDate = new Date("2025-07-01");
    render(<DatePicker value={initialDate} onChange={handleChange} />);

    const button = screen.getByRole("button", { name: /pick a date/i });
    await user.click(button);

    const newDateBtn = screen.getByLabelText("Tuesday, July 15th, 2025");
    await user.click(newDateBtn);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
