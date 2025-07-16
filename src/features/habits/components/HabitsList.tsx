import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import HabitCard from "@/features/habits/components/HabitCard.tsx";
import {compareAsc} from "date-fns";

const HabitsList = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);
  const sortedHabitsByDate = [...habits].sort((a, b) =>
    compareAsc(b.createdAt, a.createdAt),
  );

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      {sortedHabitsByDate.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </ul>
  );
};

export default HabitsList;
