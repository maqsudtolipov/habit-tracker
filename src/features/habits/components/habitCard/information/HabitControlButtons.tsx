import type {Habit} from "@/features/habits/types.ts";
import HabitEditButton from "@/features/habits/components/habitCard/editHabit/HabitEditButton.tsx";
import HabitDeleteButton from "@/features/habits/components/habitCard/deleteHabit/HabitDeleteButton.tsx";

interface HabitControlsProps {
  habit: Habit;
}

const HabitControlButtons = ({ habit }: HabitControlsProps) => {
  return (
    <div className="p-1 bg-gray-100 rounded-md flex items-center gap-2">
      <HabitEditButton habit={habit} />
      <HabitDeleteButton habit={habit} />
    </div>
  );
};

export default HabitControlButtons;
