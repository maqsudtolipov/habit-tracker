import {expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import DialogWrapper from "@/shared/components/DialogWrapper.tsx";
import userEvent from "@testing-library/user-event";

describe("<DialogWrapper />", () => {
  it("should render trigger and title", async () => {
    render(
      <DialogWrapper title="Edit Habit" trigger={<button>Edit dialog</button>}>
        {(onClose) => (
          <div>
            <button onClick={onClose}>Update Habit</button>
          </div>
        )}
      </DialogWrapper>,
    );

    // Renders trigger
    const trigger = screen.getByRole("button", { name: /edit dialog/i });
    expect(trigger).toBeInTheDocument();
  });

  it("should open on trigger clicked and render children", async () => {
    const user = userEvent.setup();
    render(
      <DialogWrapper title="Edit Habit" trigger={<button>Edit dialog</button>}>
        {(onClose) => (
          <div>
            <button onClick={onClose}>Update Habit</button>
          </div>
        )}
      </DialogWrapper>,
    );

    // Renders trigger
    const trigger = screen.getByRole("button", { name: /edit dialog/i });
    expect(trigger).toBeInTheDocument();

    await user.click(trigger);

    expect(
      screen.getByRole("button", { name: /Update Habit/i }),
    ).toBeInTheDocument();
  });

  it("should pass onClose correctly to the children", () => {});

  it("should ", () => {});
});
