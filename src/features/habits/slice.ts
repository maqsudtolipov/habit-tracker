import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {Habit, HabitsState} from "@/features/habits/types.ts";
import {nanoid} from "nanoid";

const INITIAL_STATE: HabitsState = {
  habits: [
    {
      id: "1a2b3c",
      name: "Drink Water",
      description: "Drink at least 8 cups of water a day to stay hydrated.",
      type: "predefined",
      createdAt: "2025-07-15T06:00:00.000Z",
      updatedAt: "2025-07-15T06:00:00.000Z",
    },
    {
      id: "4d5e6f",
      name: "Read 10 Pages",
      description: "",
      type: "predefined",
      createdAt: "2025-07-12T09:45:00.000Z",
      updatedAt: "2025-07-14T08:20:00.000Z",
    },
    {
      id: "7g8h9i",
      name: "Stretch in the Morning",
      description:
        "Do a quick 5-minute stretch after waking up to improve flexibility.",
      type: "custom",
      createdAt: "2025-06-25T07:30:00.000Z",
      updatedAt: "2025-07-10T07:30:00.000Z",
    },
    {
      id: "0j1k2l",
      name: "No Sugar Day",
      description: "Avoid all added sugars for the day.",
      type: "custom",
      createdAt: "2025-07-01T10:15:00.000Z",
      updatedAt: "2025-07-13T10:15:00.000Z",
    },
    {
      id: "3m4n5o",
      name: "Evening Walk",
      description: "",
      type: "predefined",
      createdAt: "2025-07-05T19:00:00.000Z",
      updatedAt: "2025-07-14T19:00:00.000Z",
    },
  ], // Fake habits for dev
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
      // Add new habit
      const newHabit: Habit = {
        id: nanoid(),
        name: action.payload.name,
        description: action.payload.description,
        type: action.payload.type,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      state.habits.push(newHabit);
    },
    editHabit: () => {},
    deleteHabit: (state: HabitsState, action: PayloadAction<string>) => {
      const existingHabit = state.habits.find(
        (habit) => habit.id === action.payload,
      );

      if (existingHabit) {
        state.habits = state.habits.filter(
          (habit) => habit.id !== action.payload,
        );
      }
    },
  },
});

export const { createNewHabit, editHabit, deleteHabit } = habitsSlice.actions;
export default habitsSlice;
