import type {Habit} from "@/features/habits/types.ts";

interface HabitCardProps {
  habit: Habit;
}

const HabitCard = ({ habit }: HabitCardProps) => {
  return (
    <li>
      <h2>{habit.name}</h2>
    </li>
  );
};

export default HabitCard;
