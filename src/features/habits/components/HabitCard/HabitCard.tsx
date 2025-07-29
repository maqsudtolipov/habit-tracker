import type {Habit} from "@/features/habits/types.ts";
import HabitCardContainer from "@/features/habits/components/HabitCard/HabitCardContainer.tsx";
import HabitInformation from "@/features/habits/components/HabitCard/Header/HabitInformation.tsx";
import {useHabitProgress} from "@/features/habits/hooks/useHabitProgress.ts";
import HabitFooter from "@/features/habits/components/HabitCard/Footer/HabitFooter.tsx";
import {memo} from "react";

interface HabitCardProps {
  habit: Habit;
}

const HabitCard = memo(({ habit }: HabitCardProps) => {
  const { isCompleted } = useHabitProgress(habit.id);

  return (
    <HabitCardContainer isCompleted={isCompleted} habitId={habit.id}>
      <HabitInformation habit={habit} isCompleted={isCompleted} />
      <HabitFooter habit={habit} />
    </HabitCardContainer>
  );
});

export default HabitCard;
