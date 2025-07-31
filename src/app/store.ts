import {combineReducers, configureStore} from "@reduxjs/toolkit";
import habitsSlice from "@/features/habits/slice.ts";
import progressSlice from "@/features/progress/slice.ts";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

const rootReducer = combineReducers({
  habits: habitsSlice.reducer,
  progress: progressSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["habits", "progress"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
