import {useEffect, useState} from "react";
import {isSameDay} from "date-fns";
import type {Habit} from "@/features/habits/types.ts";
import {useAppSelector} from "@/app/hooks.ts";
import {selectHabitProgressByDate} from "@/features/progress/selectors.ts";

export const useHabitDatePicker = (habit: Habit) => {
  const globalSelectedDate = useAppSelector(
    (state) => state.habits.selectedDate,
  );
  const parsedGlobalDate = new Date(globalSelectedDate);

  const [selectedDate, setSelectedDate] = useState<Date>(parsedGlobalDate);

  useEffect(() => {
    setSelectedDate(parsedGlobalDate);
  }, [globalSelectedDate]);

  const isToday = isSameDay(selectedDate, globalSelectedDate);
  const isAlreadyCompleted = useAppSelector(
    selectHabitProgressByDate(habit.id, selectedDate),
  );

  return {
    selectedDate,
    parsedGlobalDate,
    isAlreadyCompleted,
    isToday,
    setSelectedDate,
  };
};
