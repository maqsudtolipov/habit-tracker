import DailySummary from "@/features/habits/components/DailySummary.tsx";
import DatePicker from "@/shared/ui/DatePicker.tsx";
import NewHabitModal from "@/features/habits/components/newHabit/NewHabitModal.tsx";

const Header = () => {
  return (
    <div className="mb-6     flex items-center justify-between flex-wrap gap-2">
      <DailySummary />

      <div className="flex items-center justify-end flex-1">
        <DatePicker />
        <NewHabitModal />
      </div>
    </div>
  );
};

export default Header;
