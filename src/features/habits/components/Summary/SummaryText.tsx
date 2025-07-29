import {format} from "date-fns";
import {useMemo} from "react";
import {useAppSelector} from "@/app/hooks.ts";
import {selectCompletedHabitsCount} from "@/features/progress/selectors.ts";

const SummaryText = () => {
  const { habitsList, selectedDate } = useAppSelector((state) => state.habits);
  const completedHabitsCount = useAppSelector((state) =>
    selectCompletedHabitsCount(state),
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
