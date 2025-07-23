export interface Habit {
  id: string;
  name: string;
  description: string;
  type: "predefined" | "custom";
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}

export interface HabitsState {
  selectedDate: string; // ISO 8601
  habitsList: Habit[];
}
