import {Label} from "@/components/ui/label.tsx";
import type {ReactNode} from "react";

interface HabitCardContainerProps {
  isCompleted: boolean;
  children: ReactNode;
}

const HabitCardContainer = ({
  isCompleted,
  children,
}: HabitCardContainerProps) => {
  return (
    <li>
      <Label
        className={
          "h-full items-start p-4 rounded-lg outline-1 outline-gray-200 border border-l-4 border-gray-200/0" +
          (isCompleted ? " border-gray-200/100" : "")
        }
      >
        <div className="h-full w-full flex flex-col gap-2">{children}</div>
      </Label>
    </li>
  );
};

export default HabitCardContainer;
