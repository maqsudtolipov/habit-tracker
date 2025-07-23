import {useSelector} from "react-redux";
import getFormattedDate from "@/shared/utils/getFormattedDate.ts";
import type {RootState} from "@/app/store.ts";
import {useMemo} from "react";

export const useHabitProgress = (habitId: string) => {
  const progress = useSelector((state: RootState) => state.progress);
  const selectedDate = useSelector(
    (state: RootState) => state.habits.selectedDate,
  );

  const formattedDate = useMemo(
    () => getFormattedDate(selectedDate),
    [selectedDate],
  );

  const todayProgress = progress
    .filter((progress) => progress.date === formattedDate)
    .find(
      (progress) =>
        progress.date === formattedDate && progress.habitId === habitId,
    );

  const isCompleted = todayProgress?.status === "completed";

  return { isCompleted };
};
