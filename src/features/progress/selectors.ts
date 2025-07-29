import {createSelector} from "@reduxjs/toolkit";
import type {RootState} from "@/app/store.ts";
import {isSameDay} from "date-fns";
import getFormattedDate from "@/shared/utils/getFormattedDate.ts";

export const selectCompletedHabitsLength = createSelector(
  [
    (state: RootState) => state.progress,
    (_: RootState, selectedDate: string) => selectedDate,
  ],
  (items, selectedDate) =>
    items.filter(
      (progress) =>
        isSameDay(progress.date, selectedDate) &&
        progress.status === "completed",
    ).length,
);

export const selectHabitProgressByDate = (habitId: string) =>
  createSelector(
    [
      (state: RootState) => state.progress,
      (state: RootState) => state.habits.selectedDate,
    ],
    (progress, selectedDate) => {
      const date = getFormattedDate(selectedDate);
      return progress.find(
        (entry) => entry.habitId === habitId && entry.date === date,
      );
    },
  );
