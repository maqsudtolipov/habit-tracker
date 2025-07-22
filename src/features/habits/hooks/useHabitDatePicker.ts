import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import {type MouseEvent, useEffect, useState} from "react";
import {toggleProgressStatus} from "@/features/progress/slice.ts";
import getFormatedDate from "@/shared/utils/getFormatedDate.ts";
import {toast} from "sonner";
import {isSameDay} from "date-fns";
import type {Habit} from "@/features/habits/types.ts";

export const useHabitDatePicker = (habit: Habit) => {
  const dispatch = useDispatch();
  const globalSelectedDate = useSelector(
    (state: RootState) => state.habits.selectedDate,
  );
  const progress = useSelector((state: RootState) => state.progress);

  const globalSelectedDateAsDate = new Date(globalSelectedDate);

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    setSelectedDate(new Date(globalSelectedDate));
  }, [globalSelectedDate]);

  const handlePickDate = (date: Date) => {
    setSelectedDate(date);
  };

  const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedDate(globalSelectedDateAsDate);
  };

  const handleConfirm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      toggleProgressStatus({
        habitId: habit.id,
        date: getFormatedDate(selectedDate),
      }),
    );

    toast.success(`Habit Completed for ${getFormatedDate(selectedDate)}`);
  };

  const formattedDate = getFormatedDate(globalSelectedDateAsDate);

  const isToday = isSameDay(selectedDate, globalSelectedDate);

  const isAlreadyCompleted = progress.find(
    (item) =>
      item.habitId === habit.id &&
      item.date === getFormatedDate(selectedDate) &&
      item.status === "completed",
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
