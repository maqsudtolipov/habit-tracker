import {useDispatch, useSelector} from "react-redux";
import {type MouseEvent, useEffect, useMemo, useState} from "react";
import {toggleProgressStatus} from "@/features/progress/slice.ts";
import getFormattedDate from "@/shared/utils/getFormattedDate.ts";
import {toast} from "sonner";
import {isSameDay} from "date-fns";
import type {RootState} from "@/app/store.ts";
import type {Habit} from "@/features/habits/types.ts";

export const useHabitDatePicker = (habit: Habit) => {
  const dispatch = useDispatch();

  const globalSelectedDate = useSelector(
    (state: RootState) => state.habits.selectedDate,
  );
  const progress = useSelector((state: RootState) => state.progress);

  const globalDate = useMemo(
    () => new Date(globalSelectedDate),
    [globalSelectedDate],
  );

  const [selectedDate, setSelectedDate] = useState<Date>(globalDate);

  const formattedDate = useMemo(
    () => getFormattedDate(globalDate),
    [globalDate],
  );

  const formattedSelectedDate = useMemo(
    () => getFormattedDate(selectedDate),
    [selectedDate],
  );

  useEffect(() => {
    setSelectedDate(globalDate);
  }, [globalDate]);

  const handlePickDate = (date: Date) => setSelectedDate(date);

  const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedDate(globalDate);
  };

  const handleConfirm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      toggleProgressStatus({ habitId: habit.id, date: formattedSelectedDate }),
    );
    toast.success(`Habit Completed for ${formattedSelectedDate}`);
  };

  const isToday = useMemo(
    () => isSameDay(selectedDate, globalDate),
    [selectedDate, globalDate],
  );

  const isAlreadyCompleted = useMemo(
    () =>
      progress.find(
        (item) =>
          item.habitId === habit.id &&
          item.date === formattedSelectedDate &&
          item.status === "completed",
      ),
    [progress, habit.id, formattedSelectedDate],
  );

  return {
    selectedDate,
    formattedDate,
    isAlreadyCompleted,
    isToday,
    handlePickDate,
    handleConfirm,
    handleReset,
  };
};
