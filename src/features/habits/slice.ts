import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {HabitsState} from "@/features/habits/types.ts";
import {nanoid} from "nanoid";
import {SAVED_HABITS_STATE} from "@/features/habits/constants.ts";

const INITIAL_STATE: HabitsState = {
  selectedDate: new Date(),
  habits: SAVED_HABITS_STATE,
};

const habitsSlice = createSlice({
  name: "habits",
  initialState: INITIAL_STATE,
  reducers: {
    createNewHabit: (
      state: HabitsState,
      action: PayloadAction<{
        name: string;
        description: string;
        type: "predefined" | "custom";
      }>,
    ) => {
      const timestamp = new Date().toISOString();
      state.habits.push({
        id: nanoid(),
        name: action.payload.name,
        description: action.payload.description,
        type: action.payload.type,
        createdAt: timestamp,
        updatedAt: timestamp,
      });
    },
    editHabit: (
      state: HabitsState,
      action: PayloadAction<{
        id: string;
        name: string;
        description: string;
      }>,
    ) => {
      const habit = state.habits.find(
        (habit) => habit.id === action.payload.id,
      );
      if (!habit) return;

      habit.name = action.payload.name;
      habit.description = action.payload.description;
      habit.updatedAt = new Date().toISOString();
    },
    deleteHabit: (state: HabitsState, action: PayloadAction<string>) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload,
      );
    },
    changeSelectedDate: (state: HabitsState, action: PayloadAction<Date>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { createNewHabit, editHabit, deleteHabit, changeSelectedDate } =
  habitsSlice.actions;
export default habitsSlice;
