import HabitsList from "@/features/habits/components/HabitsList.tsx";
import DailSummary from "@/features/habits/components/DailSummary.tsx";

const HomePage = () => {
  return (
    <>
      <DailSummary />
      <HabitsList />
    </>
  );
};

export default HomePage;
