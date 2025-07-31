import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import ConfirmDialog from "@/shared/components/ConfirmDialog.tsx";
import userEvent from "@testing-library/user-event";

describe("<ConfirmDialog/>", () => {
  it("should render trigger", () => {
    render(
      <ConfirmDialog onConfirm={() => {}}>
        <button>Delete habit</button>
      </ConfirmDialog>,
    );

    expect(screen.getByText("Delete habit")).toBeInTheDocument();
  });

  it("should open when trigger is clicked", async () => {
    const user = userEvent.setup();
    render(
      <ConfirmDialog onConfirm={() => {}}>
        <button>Delete habit</button>
      </ConfirmDialog>,
    );

    await user.click(screen.getByRole("button", { name: "Delete habit" }));

    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
  });

  it("should close on 'cancel' clicked", async () => {
    const user = userEvent.setup();
    render(
      <ConfirmDialog onConfirm={() => {}}>
        <button>Delete habit</button>
      </ConfirmDialog>,
    );

    // Open dialog
    await user.click(screen.getByRole("button", { name: "Delete habit" }));

    // Click cancel
    await user.click(screen.getByRole("button", { name: "Cancel" }));

    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();
  });

  it("should call onClose() and close on 'delete' clicked", async () => {
    const user = userEvent.setup();
    const onConfirm = vi.fn();
    render(
      <ConfirmDialog onConfirm={onConfirm}>
        <button>Delete habit</button>
      </ConfirmDialog>,
    );

    // Open dialog
    await user.click(screen.getByRole("button", { name: "Delete habit" }));

    // Click delete
    await user.click(screen.getByRole("button", { name: "Delete" }));

    expect(onConfirm).toHaveBeenCalled();
  });

  it("should close on 'escape' key pressed", async () => {
    const user = userEvent.setup();
    render(
      <ConfirmDialog onConfirm={() => {}}>
        <button>Delete habit</button>
      </ConfirmDialog>,
    );

    // Open dialog
    await user.click(screen.getByRole("button", { name: "Delete habit" }));

    // Press escape
    await user.keyboard("{Escape}");

    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();
  });
});
