import type {Habit} from "@/features/habits/types.ts";
import HabitHeader from "@/features/habits/components/HabitCard/Header/HabitHeader.tsx";
import HabitDescription from "@/features/habits/components/HabitCard/Header/HabitDescription.tsx";

interface HabitInformationProps {
  habit: Habit;
  isCompleted: boolean;
}

const HabitInformation = ({ habit, isCompleted }: HabitInformationProps) => {
  return (
    <div className="mb-2 flex flex-col gap-2 flex-1">
      <HabitHeader habit={habit} isCompleted={isCompleted} />
      {habit.description && (
        <HabitDescription description={habit.description} />
      )}
    </div>
  );
};

export default HabitInformation;
