import {useAppSelector} from "@/app/hooks.ts";
import {selectHabitProgressByDate} from "@/features/progress/selectors.ts";

export const useHabitProgress = (habitId: string) => {
  const todayProgress = useAppSelector(selectHabitProgressByDate(habitId));
  const isCompleted = todayProgress?.status === "completed";

  return { isCompleted };
};
