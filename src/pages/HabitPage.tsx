import {useParams} from "react-router-dom";
import NotFoundPage from "@/pages/NotFoundPage.tsx";
import {useAppSelector} from "@/app/hooks.ts";

const HabitPage = () => {
  const habitsList = useAppSelector((state) => state.habits.habitsList);
  const { id } = useParams();
  const currentHabit = habitsList.find((habit) => habit.id === id);

  if (!currentHabit) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <h1 className="pb-1 text-2xl font-medium">{currentHabit.name}</h1>
      {currentHabit.description && <p>{currentHabit.description}</p>}
    </div>
  );
};

export default HabitPage;
