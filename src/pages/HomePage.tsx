import HabitsList from "@/features/habits/components/HabitsList.tsx";

const HomePage = () => {
  return (
    <div>
      <div>Date selection</div>
      <div>Summary: 3/5 completed</div>
      <HabitsList />
    </div>
  );
};

export default HomePage;
