import {describe, expect, it} from "vitest";
import TabsWrapper from "@/shared/components/TabsWrapper.tsx";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("A truthy statement", () => {
  const tabItems = [
    { label: "Fruits", value: "fruits", content: <p>Fruits list</p> },
    {
      label: "Vegetables",
      value: "vegetables",
      content: <p>Vegetables list</p>,
    },
  ];

  it("should render all tab triggers", () => {
    render(<TabsWrapper defaultValue="fruits" items={tabItems} />);

    expect(screen.getByText("Fruits")).toBeInTheDocument();
    expect(screen.getByText("Vegetables")).toBeInTheDocument();
  });

  it("should show default tab content", () => {
    render(<TabsWrapper defaultValue="fruits" items={tabItems} />);

    expect(screen.getByText("Fruits list")).toBeInTheDocument();
  });

  it("should switch content when tab changes", async () => {
    const user = userEvent.setup();
    render(<TabsWrapper defaultValue="fruits" items={tabItems} />);

    await user.click(screen.getByRole("tab", { name: "Vegetables" }));

    expect(screen.getByText("Vegetables list")).toBeInTheDocument();
    expect(screen.queryByText("Fruits list")).not.toBeInTheDocument();
  });
});
