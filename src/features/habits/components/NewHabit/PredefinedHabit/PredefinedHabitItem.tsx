import type {Habit} from "@/features/habits/types.ts";
import type {KeyboardEvent} from "react";
import {cn} from "@/shared/utils/utils.ts";

interface PredefinedHabitItemProps {
  habit: Habit;
  selectedHabitId: string | null;
  onSelectHabit: (id: string) => void;
}

const PredefinedHabitItem = ({
  habit,
  selectedHabitId,
  onSelectHabit,
}: PredefinedHabitItemProps) => {
  const isSelected = habit.id === selectedHabitId;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (isSelected) {
        // Submit the form manually when already selected
        const form = e.currentTarget.closest("form") as HTMLFormElement | null;
        form?.requestSubmit(); // uses native form submission
      } else {
        onSelectHabit(habit.id);
      }
    }
  };

  const listItemClass = cn(
    "p-2 rounded",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    { "bg-neutral-100 outline-2 outline-neutral-200": isSelected },
  );

  return (
    <li
      key={habit.id}
      className={listItemClass}
      onClick={() => onSelectHabit(habit.id)}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <p className="text-black font-medium">{habit.name}</p>
      <p className="text-sm">{habit.description}</p>
    </li>
  );
};

export default PredefinedHabitItem;
