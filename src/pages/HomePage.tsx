import HabitsList from "@/features/habits/components/HabitsList.tsx";
import DailSummary from "@/features/habits/components/DailSummary.tsx";

const HomePage = () => {
  return (
    <div>
      <div>Date selection</div>
      <DailSummary />
      <HabitsList />
    </div>
  );
};

export default HomePage;
