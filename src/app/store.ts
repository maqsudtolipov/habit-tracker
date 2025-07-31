import {combineReducers, configureStore} from "@reduxjs/toolkit";
import habitsSlice from "@/features/habits/slice.ts";
import progressSlice from "@/features/progress/slice.ts";
import storage from "redux-persist/lib/storage";
import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE,} from "redux-persist";
import {habitTransform} from "@/features/habits/transforms.ts";

const rootReducer = combineReducers({
  habits: habitsSlice.reducer,
  progress: progressSlice.reducer,
});

type RootReducerState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["habits", "progress"],
  transforms: [habitTransform],
};

const persistedReducer = persistReducer<RootReducerState>(
  persistConfig,
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
