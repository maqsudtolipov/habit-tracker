import DatePicker from "@/shared/ui/DatePicker.tsx";
import {Button} from "@/components/ui/button.tsx";
import {RotateCcw} from "lucide-react";
import getFormatedDate from "@/shared/utils/getFormatedDate.ts";
import {type MouseEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import type {Habit} from "@/features/habits/types.ts";
import {isSameDay} from "date-fns";
import {toggleProgressStatus} from "@/features/progress/slice.ts";

const HabitDatePicker = ({ habit }: { habit: Habit }) => {
  const progress = useSelector((state: RootState) => state.progress);
  const globalSelectedDate = useSelector(
    (state: RootState) => state.habits.selectedDate,
  );
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedDate(globalSelectedDate);
  }, [globalSelectedDate]);

  const isProgressAlreadySaved = progress.find(
    (item) =>
      item.habitId === habit.id &&
      item.date === getFormatedDate(selectedDate) &&
      item.status === "completed",
  );
  const isDateToday = isSameDay(selectedDate, globalSelectedDate);

  const handlePickDate = (date: Date) => {
    setSelectedDate(date);
  };

  const handleSavePastProgress = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      toggleProgressStatus({
        habitId: habit.id,
        date: getFormatedDate(selectedDate),
      }),
    );
  };

  const handleResetPickedDate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // This is bc card wrapped with Label
    e.stopPropagation();

    setSelectedDate(new Date());
  };

  return (
    <div className="flex items-center gap-2 shrink-0">
      <DatePicker value={selectedDate} onChange={handlePickDate} />
      {!isProgressAlreadySaved && !isDateToday && (
        <>
          <Button
            className="size-8"
            variant="outline"
            size="icon"
            onClick={handleResetPickedDate}
          >
            <RotateCcw />
          </Button>
          <Button size="sm" onClick={handleSavePastProgress}>
            Confirm
          </Button>
        </>
      )}
    </div>
  );
};

export default HabitDatePicker;
