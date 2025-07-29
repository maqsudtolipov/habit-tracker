import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import {format, isSameDay} from "date-fns";
import {useMemo} from "react";
import {useAppSelector} from "@/app/hooks.ts";

const SummaryText = () => {
  const { habitsList, selectedDate } = useAppSelector(
    (state) => state.habits,
  );
  const progress = useSelector((state: RootState) => state.progress);

  const completedHabitsCount = useMemo(
    () =>
      progress.filter(
        (progress) =>
          isSameDay(progress.date, selectedDate) &&
          progress.status === "completed",
      ).length,
    [progress, selectedDate],
  );

  const formattedDate = useMemo(
    () => format(selectedDate, "MMM d, yyyy"),
    [selectedDate],
  );

  return (
    <span className="text-lg">
      For <em>{formattedDate}</em> - {completedHabitsCount} of{" "}
      {habitsList.length} habits completed
    </span>
  );
};

export default SummaryText;
