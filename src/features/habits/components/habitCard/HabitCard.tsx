import type {Habit} from "@/features/habits/types.ts";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import HabitCardContainer from "@/features/habits/components/habitCard/HabitCardContainer.tsx";
import HabitDatePicker from "@/features/habits/components/habitCard/HabitDatePicker.tsx";
import HabitInformation from "@/features/habits/components/habitCard/HabitInformation.tsx";
import getFormatedDate from "@/shared/utils/getFormatedDate.ts";

interface HabitCardProps {
  habit: Habit;
}

const HabitCard = ({ habit }: HabitCardProps) => {
  const progress = useSelector((state: RootState) => state.progress);
  const selectedDate = useSelector(
    (state: RootState) => state.habits.selectedDate,
  );

  const todayProgress = progress
    .filter((progress) => progress.date === getFormatedDate(selectedDate))
    .find(
      (progress) =>
        progress.date === getFormatedDate(selectedDate) &&
        progress.habitId === habit.id,
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
