import HabitsList from "@/features/habits/components/HabitsList/HabitsList.tsx";
import Summary from "@/features/habits/components/Summary/Summary.tsx";

const HomePage = () => {
  return (
    <>
      <Summary />
      <HabitsList />
    </>
  );
};

export default HomePage;
