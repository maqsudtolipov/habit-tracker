import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import {useParams} from "react-router-dom";
import NotFoundPage from "@/pages/NotFoundPage.tsx";

const HabitPage = () => {
  const habitList = useSelector((state: RootState) => state.habits.habits);
  const { id } = useParams();
  const currentHabit = habitList.find((habit) => habit.id === id);

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
