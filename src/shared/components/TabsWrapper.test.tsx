import {describe, expect, it} from "vitest";
import TabsWrapper from "@/shared/components/TabsWrapper.tsx";
import {render, screen} from "@testing-library/react";

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
  });
});
