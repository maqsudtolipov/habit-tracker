import type {Habit} from "@/features/habits/types.ts";
import EditHabitButton from "@/features/habits/components/HabitCard/EditHabitButton/EditHabitButton.tsx";
import DeleteHabitButton from "@/features/habits/components/HabitCard/DeleteHabitButton/DeleteHabitButton.tsx";

interface HabitControlsProps {
  habit: Habit;
}

const HabitControlButtons = ({ habit }: HabitControlsProps) => {
  return (
    <div className="p-1 bg-gray-100 rounded-md flex items-center gap-2">
      <EditHabitButton habit={habit} />
      <DeleteHabitButton habit={habit} />
    </div>
  );
};

export default HabitControlButtons;
