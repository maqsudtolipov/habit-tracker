import {useDispatch, useSelector} from "react-redux";
import {type MouseEvent, useEffect, useMemo, useState} from "react";
import {toggleProgressStatus} from "@/features/progress/slice.ts";
import getFormatedDate from "@/shared/utils/getFormatedDate.ts";
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

    const formatted = getFormatedDate(selectedDate);
    dispatch(toggleProgressStatus({ habitId: habit.id, date: formatted }));
    toast.success(`Habit Completed for ${formatted}`);
  };

  const formattedDate = useMemo(
    () => getFormatedDate(globalDate),
    [globalDate],
  );

  const isToday = useMemo(
    () => isSameDay(selectedDate, globalDate),
    [selectedDate, globalDate],
  );

  const isAlreadyCompleted = useMemo(
    () =>
      progress.some(
        (item) =>
          item.habitId === habit.id &&
          item.date === getFormatedDate(selectedDate) &&
          item.status === "completed",
      ),
    [progress, habit.id, selectedDate],
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
