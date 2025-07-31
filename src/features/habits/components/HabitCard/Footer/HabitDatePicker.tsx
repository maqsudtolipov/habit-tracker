import DatePicker from "@/shared/components/DatePicker.tsx";
import type {Habit} from "@/features/habits/types.ts";
import HabitDatePickerActions from "@/features/habits/components/HabitCard/Footer/HabitDatePickerActions.tsx";
import {useHabitDatePicker} from "@/features/habits/hooks/useHabitDatePicker.ts";
import getFormattedDate from "@/shared/utils/getFormattedDate.ts";
import {type MouseEvent, useMemo} from "react";
import {toggleProgressStatus} from "@/features/progress/slice.ts";
import {toast} from "sonner";
import {useAppDispatch} from "@/app/hooks.ts";

const HabitDatePicker = ({ habit }: { habit: Habit }) => {
  const dispatch = useAppDispatch();
  const {
    selectedDate,
    parsedGlobalDate,
    isAlreadyCompleted,
    isToday,
    setSelectedDate,
  } = useHabitDatePicker(habit);

  const formattedSelectedDate = useMemo(
    () => getFormattedDate(selectedDate),
    [selectedDate],
  );

  const handlePickDate = (date: Date) => setSelectedDate(date);

  const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedDate(parsedGlobalDate);
  };

  const handleConfirm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      toggleProgressStatus({ habitId: habit.id, date: formattedSelectedDate }),
    );
    toast.success(`Habit Completed for ${formattedSelectedDate}`);
  };

  return (
    <div className="flex items-center gap-2 shrink-0">
      <DatePicker
        value={selectedDate}
        onChange={handlePickDate}
        aria-label={`Select a date to mark the "${habit.name}" habit as completed`}
      />
      {!isAlreadyCompleted && !isToday ? (
        <HabitDatePickerActions
          onReset={handleReset}
          onConfirm={handleConfirm}
          formattedDate={formattedSelectedDate}
        />
      ) : (
        // This is due to card changing height when date picked
        <div className="w-[116px]"></div>
      )}
    </div>
  );
};

export default HabitDatePicker;
