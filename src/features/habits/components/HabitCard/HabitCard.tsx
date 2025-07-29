import type {Habit} from "@/features/habits/types.ts";
import HabitCardContainer from "@/features/habits/components/HabitCard/HabitCardContainer.tsx";
import HabitInformation from "@/features/habits/components/HabitCard/information/HabitInformation.tsx";
import {useHabitProgress} from "@/features/habits/hooks/useHabitProgress.ts";
import HabitFooter from "@/features/habits/components/HabitCard/footer/HabitFooter.tsx";

interface HabitCardProps {
  habit: Habit;
}

const HabitCard = ({ habit }: HabitCardProps) => {
  const { isCompleted } = useHabitProgress(habit.id);

  console.log(`${habit.id} (${habit.createdAt}): is now ${isCompleted}`);

  return (
    <HabitCardContainer isCompleted={isCompleted} habitId={habit.id}>
      <HabitInformation habit={habit} isCompleted={isCompleted} />
      <HabitFooter habit={habit} />
    </HabitCardContainer>
  );
};

export default HabitCard;
