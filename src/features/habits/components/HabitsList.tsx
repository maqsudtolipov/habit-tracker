import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import HabitCard from "@/features/habits/components/HabitCard.tsx";

const HabitsList = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);

  return (
    <div>
      <h1>Habits here</h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </ul>
    </div>
  );
};

export default HabitsList;
