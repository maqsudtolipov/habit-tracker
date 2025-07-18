import DatePicker from "@/shared/ui/DatePicker.tsx";
import {Button} from "@/components/ui/button.tsx";
import {XIcon} from "lucide-react";
import getFormatedDate from "@/shared/utils/getFormatedDate.ts";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import type {Habit} from "@/features/habits/types.ts";
import {isSameDay} from "date-fns";
import {toggleProgressStatus} from "@/features/progress/slice.ts";

const HabitDatePicker = ({ habit }: { habit: Habit }) => {
  const progress = useSelector((state: RootState) => state.progress);
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const isProgressAlreadySaved = progress.find(
    (item) =>
      item.habitId === habit.id &&
      item.date === getFormatedDate(selectedDate) &&
      item.status === "completed",
  );
  const isDateToday = isSameDay(selectedDate, new Date());

  const handlePickDate = (date: Date) => {
    setSelectedDate(date);
  };

  const handleSavePastProgress = () => {
    dispatch(
      toggleProgressStatus({
        habitId: habit.id,
        date: getFormatedDate(selectedDate),
      }),
    );
  };

  return (
    <div className="flex items-center gap-2 shrink-0">
      <DatePicker value={selectedDate} onChange={handlePickDate} />
      {!isProgressAlreadySaved && !isDateToday && (
        <>
          <Button variant="outline" size="sm">
            <XIcon />
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
