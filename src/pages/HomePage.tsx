import HabitsList from "@/features/habits/components/HabitsList.tsx";
import DailySummary from "@/features/habits/components/DailySummary.tsx";

const HomePage = () => {
  return (
    <>
      <DailySummary />
      <HabitsList />
    </>
  );
};

export default HomePage;
