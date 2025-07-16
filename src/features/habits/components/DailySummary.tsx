import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import getTodaysDate from "@/shared/utils/getTodaysDate.ts";

const today = getTodaysDate();

const DailySummary = () => {
  const progress = useSelector((state: RootState) => state.progress);

  const completedHabitsCount = progress.filter(
    (progress) => progress.date === today && progress.status === "completed",
  ).length;

  return (
    <span className="text-lg">
       {completedHabitsCount} of 5 habits completed
    </span>
  );
};

export default DailySummary;
