import {createSelector, createSlice, type PayloadAction,} from "@reduxjs/toolkit";
import type {HabitProgressState} from "@/features/progress/types.ts";
import type {RootState} from "@/app/store.ts";
import {isSameDay} from "date-fns";
import getFormattedDate from "@/shared/utils/getFormattedDate.ts";

const INITIAL_STATE: HabitProgressState = [];

const progressSlice = createSlice({
  name: "progress",
  initialState: INITIAL_STATE,
  reducers: {
    toggleProgressStatus: (
      state,
      action: PayloadAction<{ date: string; habitId: string }>,
    ) => {
      const { date, habitId } = action.payload;

      const existingIndex = state.find(
        (progress) => progress.date === date && progress.habitId === habitId,
      );

      if (existingIndex) {
        // Toggle existing progress

        existingIndex.status =
          existingIndex.status === "completed" ? null : "completed";
        existingIndex.updatedAt = new Date().toISOString();
      } else {
        // Add new completed progress

        state.push({
          habitId,
          date,
          status: "completed",
          updatedAt: new Date().toISOString(),
        });
      }
    },
    deleteHabitProgress: (state, action: PayloadAction<string>) => {
      return state.filter((progress) => progress.habitId !== action.payload);
    },
  },
});

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

export const { toggleProgressStatus, deleteHabitProgress } =
  progressSlice.actions;
export default progressSlice;
