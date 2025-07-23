import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {HabitProgressState} from "@/features/progress/types.ts";

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
  },
});

export const { toggleProgressStatus } = progressSlice.actions;
export default progressSlice;
