import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import HabitCard from "@/features/habits/components/HabitCard.tsx";

const HabitsList = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);

  return (
    <div>
      <h1>Habits here</h1>
      <ul>
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </ul>
    </div>
  );
};

export default HabitsList;
