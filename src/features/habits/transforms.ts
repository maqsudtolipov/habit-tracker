import {createTransform} from "redux-persist";
import type {HabitsState} from "@/features/habits/types.ts";
import {REDUX_PERSIST_HABIT_TRANSFORM_WHITELIST} from "@/features/habits/constants.ts";

export const habitTransform = createTransform<HabitsState, HabitsState>(
  (inboundState) => ({
    habitsList: inboundState.habitsList,
    selectedDate: "",
  }),
  (outboundState) => ({
    habitsList: outboundState.habitsList || [],
    selectedDate: new Date().toISOString(),
  }),
  { whitelist: REDUX_PERSIST_HABIT_TRANSFORM_WHITELIST },
);
