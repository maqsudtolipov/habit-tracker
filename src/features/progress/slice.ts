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
      // Check if progress is sored
      const existingProgressIndex = state.findIndex(
        (progress) =>
          progress.date === action.payload.date &&
          progress.habitId === action.payload.habitId,
      );
      const progress = state[existingProgressIndex];

      // Toggle if status exists
      if (existingProgressIndex > -1) {
        progress.status = progress.status === "completed" ? null : "completed";
      }

      // Create new progress if status doesn't exist
      else {
        const newProgress = {
          habitId: action.payload.habitId,
          date: action.payload.date,
          status: "completed" as const,
          updatedAt: new Date().toISOString(),
        };

        state.push(newProgress);
      }
    },
  },
});

export const { toggleProgressStatus } = progressSlice.actions;
export default progressSlice;
