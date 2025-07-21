import {useSelector} from "react-redux";
import getFormatedDate from "@/shared/utils/getFormatedDate.ts";
import type {RootState} from "@/app/store.ts";

export const useHabitProgress = (habitId: string) => {
  const progress = useSelector((state: RootState) => state.progress);
  const selectedDate = useSelector(
    (state: RootState) => state.habits.selectedDate,
  );

  const todayProgress = progress
    .filter((progress) => progress.date === getFormatedDate(selectedDate))
    .find(
      (progress) =>
        progress.date === getFormatedDate(selectedDate) &&
        progress.habitId === habitId,
    );

  const isCompleted = todayProgress?.status === "completed";

  return { isCompleted };
};
