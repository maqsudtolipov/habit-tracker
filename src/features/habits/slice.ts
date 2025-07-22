import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {HabitsState} from "@/features/habits/types.ts";
import {nanoid} from "nanoid";

const INITIAL__EMPTY_STATE: HabitsState = {
  selectedDate: new Date().toISOString(),
  habits: [],
};

const habitsSlice = createSlice({
  name: "habits",
  initialState: INITIAL__EMPTY_STATE,
  reducers: {
    // Habits
    createNewHabit: (
      state: HabitsState,
      action: PayloadAction<{
        id?: string;
        name: string;
        description: string;
        type: "predefined" | "custom";
      }>,
    ) => {
      const timestamp = new Date().toISOString();
      state.habits.push({
        id: action.payload.id || nanoid(),
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

    // Date
    changeSelectedDate: (state: HabitsState, action: PayloadAction<Date>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { createNewHabit, editHabit, deleteHabit, changeSelectedDate } =
  habitsSlice.actions;
export default habitsSlice;
