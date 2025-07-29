import HabitCard from "@/features/habits/components/HabitCard/HabitCard.tsx";
import {compareAsc} from "date-fns";
import NoHabitsMessage from "@/features/habits/components/HabitsList/NoHabitsMessage.tsx";
import {useAppSelector} from "@/app/hooks.ts";

const HabitsList = () => {
  const habitsList = useAppSelector((state) => state.habits.habitsList);
  const sortedHabitsByDate = [...habitsList].sort((a, b) =>
    compareAsc(b.createdAt, a.createdAt),
  );

  if (!sortedHabitsByDate.length) {
    return <NoHabitsMessage />;
  }

  return (
    <ul
      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
      aria-label="List of your habits"
    >
      {sortedHabitsByDate.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </ul>
  );
};

export default HabitsList;
