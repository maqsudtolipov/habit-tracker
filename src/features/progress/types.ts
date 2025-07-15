type HabitProgressEntry = {
  habitId: string;
  date: string; // YYYY-MM-DD
  status: "completed" | null;
  updatedAt: string; // ISO 8601
};

export type HabitProgressState = HabitProgressEntry[];
