import {createTransform} from "redux-persist";
import type {HabitsState} from "@/features/habits/types.ts";

export const habitTransform = createTransform<HabitsState, HabitsState>(
  (inboundState) => ({
    habitsList: inboundState.habitsList,
    selectedDate: "",
  }),
  (outboundState) => ({
    habitsList: outboundState.habitsList || [],
    selectedDate: new Date().toISOString(),
  }),
  { whitelist: ["habits"] },
);
