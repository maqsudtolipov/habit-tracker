import getFormattedDate from "@/shared/utils/getFormattedDate.ts";
import {useMemo} from "react";
import {useAppSelector} from "@/app/hooks.ts";

export const useHabitProgress = (habitId: string) => {
  const progress = useAppSelector((state) => state.progress);
  const selectedDate = useAppSelector((state) => state.habits.selectedDate);

  const formattedDate = useMemo(
    () => getFormattedDate(selectedDate),
    [selectedDate],
  );

  const todayProgress = useMemo(
    () =>
      progress
        .filter((progress) => progress.habitId === habitId)
        .find((progress) => progress.date === formattedDate),
    [progress, habitId, formattedDate],
  );

  const isCompleted = todayProgress?.status === "completed";

  return { isCompleted };
};
