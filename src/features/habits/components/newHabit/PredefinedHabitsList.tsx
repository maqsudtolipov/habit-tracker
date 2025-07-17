import {PREDEFINED_HABITS} from "@/features/habits/constants.ts";

const PredefinedHabitsList = () => {
  return (
    <>
      <p className="text-sm text-muted-foreground">
        Choose one of the predefined habits here.
      </p>
      <ul>
        {PREDEFINED_HABITS.map((habit) => (
          <li key={habit.id}>
            <p>{habit.name}</p>
            <p>{habit.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PredefinedHabitsList;
