import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import getTodaysDate from "@/shared/utils/getTodaysDate.ts";
import {format} from "date-fns";

const today = getTodaysDate();

const DailySummary = () => {
  const { habits, selectedDate } = useSelector(
    (state: RootState) => state.habits,
  );
  const progress = useSelector((state: RootState) => state.progress);

  const completedHabitsCount = progress.filter(
    (progress) => progress.date === today && progress.status === "completed",
  ).length;

  return (
    <span className="text-lg">
      For <em>{format(selectedDate, "MMM d, yyyy")}</em> -{" "}
      {completedHabitsCount} of {habits.length} habits completed
    </span>
  );
};

export default DailySummary;
