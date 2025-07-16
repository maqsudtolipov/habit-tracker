import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import getTodaysDate from "@/shared/utils/getTodaysDate.ts";

const today = getTodaysDate();

const DailySummary = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);
  const progress = useSelector((state: RootState) => state.progress);

  const completedHabitsCount = progress.filter(
    (progress) => progress.date === today && progress.status === "completed",
  ).length;

  return (
    <span className="text-lg">
      For <em>DATE</em> {completedHabitsCount} of {habits.length} habits
      completed
    </span>
  );
};

export default DailySummary;
