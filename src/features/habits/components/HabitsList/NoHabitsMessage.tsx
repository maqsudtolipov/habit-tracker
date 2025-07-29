import NewHabitDialog from "@/features/habits/components/NewHabit/NewHabitDialog.tsx";

const NoHabitsMessage = () => {
  return (
    <div className="px-4 py-12 flex flex-col items-center justify-center gap-4 text-center rounded-lg outline-1 outline-gray-200">
      <h2 className="text-2xl font-semibold text-neutral-800">No Habits Yet</h2>
      <p className="text-neutral-600">
        Start by creating your first habit to track your progress.
      </p>
      <NewHabitDialog />
    </div>
  );
};

export default NoHabitsMessage;
