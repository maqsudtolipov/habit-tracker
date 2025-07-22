import NewHabitDialog from "@/features/habits/components/habitCard/newHabit/NewHabitDialog.tsx";

const NoHabitsMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <h2 className="text-2xl font-semibold text-neutral-800">No Habits Yet</h2>
      <p className="text-neutral-600">
        Start by creating your first habit to track your progress.
      </p>
      <NewHabitDialog />
    </div>
  );
};

export default NoHabitsMessage;
