import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import getTodaysDate from "@/shared/utils/getTodaysDate.ts";

const today = getTodaysDate();

const DailSummary = () => {
  const progress = useSelector((state: RootState) => state.progress);

  const completedHabitsCount = progress.filter(
    (progress) => progress.date === today && progress.status === "completed",
  ).length;

  console.log(progress.filter((progress) => progress.date === today && progress.status === 'completed'));

  return (
    <p className="mb-4 text-lg">
      🔥 {completedHabitsCount} of 5 habits completed
    </p>
  );
};

export default DailSummary;
