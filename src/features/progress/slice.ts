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

      const existingIndex = state.findIndex(
        (progress) => progress.date === date && progress.habitId === habitId,
      );

      // Toggle existing progress
      if (existingIndex > -1) {
        const progress = state[existingIndex];
        progress.status = progress.status === "completed" ? null : "completed";
        progress.updatedAt = new Date().toISOString();
      }

      // Add new completed progress
      else {
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
