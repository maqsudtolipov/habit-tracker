import type {Habit} from "@/features/habits/types.ts";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import HabitCardContainer from "@/features/habits/components/habitCard/HabitCardContainer.tsx";
import HabitDatePicker from "@/features/habits/components/habitCard/HabitDatePicker.tsx";
import HabitInformation from "@/features/habits/components/habitCard/HabitInformation.tsx";
import getFormatedDate from "@/shared/utils/getFormatedDate.ts";
import {Link} from "react-router-dom";
import {ChevronRightIcon} from "lucide-react";

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
    <HabitCardContainer isCompleted={isCompleted} habitId={habit.id}>
      <span className="sr-only">
        Habit is {isCompleted ? "completed" : "not completed"} for selected date
      </span>

      <HabitInformation habit={habit} isCompleted={isCompleted} />

      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <HabitDatePicker habit={habit} />
        <Link
          className="self-start flex items-center gap-0/5 text-sm text-neutral-600 font-medium hover:underline sm:self-auto"
          to={`/habit/${habit.id}`}
          aria-label={`See details for ${habit.name}`}
        >
          See details <ChevronRightIcon className="size-4" />
        </Link>
      </div>
    </HabitCardContainer>
  );
};

export default HabitCard;
