import DatePicker from "@/shared/ui/DatePicker.tsx";
import {Button} from "@/components/ui/button.tsx";
import {XIcon} from "lucide-react";
import getFormatedDate from "@/shared/utils/getFormatedDate.tsx";
import {useState} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import type {Habit} from "@/features/habits/types.ts";
import {isSameDay} from "date-fns";

const HabitDatePicker = ({ habit }: { habit: Habit }) => {
  const progress = useSelector((state: RootState) => state.progress);

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const isProgressAlreadySaved = progress.some(
    (item) =>
      item.habitId === habit.id &&
      item.date === getFormatedDate(selectedDate) &&
      item.status === "completed",
  );
  const isDateToday = isSameDay(selectedDate, new Date());

  const handlePickDate = (date: Date) => {
    setSelectedDate(date);

    console.log("pick date", getFormatedDate(date));

    // Check whether habit + date exist
  };

  return (
    <div className="flex items-center gap-2 shrink-0">
      <DatePicker value={selectedDate} onChange={handlePickDate} />
      {!isProgressAlreadySaved && !isDateToday && (
        <>
          <Button variant="outline" size="sm">
            <XIcon />
          </Button>
          <Button size="sm">Confirm</Button>
        </>
      )}
    </div>
  );
};

export default HabitDatePicker;
