import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {FAKE_PRORGRESS_DATA} from "@/features/progress/fakeData.ts";
import getTodaysDate from "@/shared/utils/getTodaysDate.ts";

const progressSlice = createSlice({
  name: "progress",
  initialState: FAKE_PRORGRESS_DATA,
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

      // Create new progress if not
      else {
        const newProgress = {
          habitId: action.payload.habitId,
          date: getTodaysDate(),
          status: "completed" as const,
          updatedAt: new Date().toISOString(),
        };

        console.log(newProgress);
        state.push(newProgress);
      }
    },
  },
});

export const { toggleProgressStatus } = progressSlice.actions;
export default progressSlice;
