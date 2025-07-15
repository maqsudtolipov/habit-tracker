import {configureStore} from "@reduxjs/toolkit";
import habitsSlice from "@/features/habits/slice.ts";
import progressSlice from "@/features/progres/slice.ts";

export const store = configureStore({
  reducer: {
    habits: habitsSlice.reducer,
    progress: progressSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
