import type {Habit} from "@/features/habits/types.ts";

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

  return (
    <li
      key={habit.id}
      className={`p-2 rounded focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]  ${isSelected && " bg-neutral-100 outline-2 outline-neutral-200"}`}
      onClick={() => onSelectHabit(habit.id)}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelectHabit(habit.id);
        }
      }}
    >
      <p className="text-black font-medium">{habit.name}</p>
      <p className="text-sm">{habit.description}</p>
    </li>
  );
};

export default PredefinedHabitItem;
