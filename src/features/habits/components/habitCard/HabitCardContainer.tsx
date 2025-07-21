import {Label} from "@/shared/ui/label.tsx";
import type {ReactNode} from "react";

interface HabitCardContainerProps {
  habitId: string;
  isCompleted: boolean;
  children: ReactNode;
}

const HabitCardContainer = ({
  habitId,
  isCompleted,
  children,
}: HabitCardContainerProps) => {
  return (
    <li role="region" aria-labelledby={`habit-${habitId}-name`}>
      <Label
        className={
          "h-full items-start p-4 rounded-lg outline-1 outline-gray-200 border border-l-4 border-gray-200/0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]" +
          (isCompleted ? " border-gray-200/100" : "")
        }
        htmlFor={`checkbox-${habitId}`}
        tabIndex={0}
      >
        <div className="h-full w-full flex flex-col gap-2">
          <span className="sr-only">
            Habit is {isCompleted ? "completed" : "not completed"} for selected
            date
          </span>
          {children}
        </div>
      </Label>
    </li>
  );
};

export default HabitCardContainer;
