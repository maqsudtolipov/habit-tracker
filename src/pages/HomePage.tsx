import HabitsList from "@/features/habits/components/HabitsList.tsx";
import CompletionSummary from "@/features/habits/components/CompletionSummary.tsx";

const HomePage = () => {
  return (
    <div>
      <div>Date selection</div>
      <CompletionSummary />
      <HabitsList />
    </div>
  );
};

export default HomePage;
