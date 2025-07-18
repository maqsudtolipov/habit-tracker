import type {Habit} from "@/features/habits/types.ts";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import getTodaysDate from "@/shared/utils/getTodaysDate.ts";
import HabitCardContainer from "@/features/habits/components/habitCard/HabitCardContainer.tsx";
import HabitDatePicker from "@/features/habits/components/habitCard/HabitDatePicker.tsx";
import HabitInformation from "@/features/habits/components/habitCard/HabitInformation.tsx";

const today = getTodaysDate();

interface HabitCardProps {
  habit: Habit;
}

const HabitCard = ({ habit }: HabitCardProps) => {
  const progress = useSelector((state: RootState) => state.progress);

  const todayProgress = progress
    .filter((progress) => progress.date === today)
    .find(
      (progress) => progress.date === today && progress.habitId === habit.id,
    );

  const isCompleted = todayProgress?.status === "completed";

  return (
    <HabitCardContainer isCompleted={isCompleted}>
      <HabitInformation habit={habit} isCompleted={isCompleted} />
      <HabitDatePicker habit={habit} />
    </HabitCardContainer>
  );
};

export default HabitCard;
