import DailySummary from "@/features/habits/components/header/DailySummary.tsx";
import DatePicker from "@/shared/ui/DatePicker.tsx";
import NewHabitTriggerButton from "@/features/habits/components/newHabit/NewHabitTriggerButton.tsx";
import {useState} from "react";

const Header = () => {
  const [filterDate, setFilterDate] = useState(new Date());

  return (
    <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
      <DailySummary />

      <div className="flex items-center justify-end flex-1">
        <DatePicker value={filterDate} onChange={setFilterDate} />
        <NewHabitTriggerButton />
      </div>
    </div>
  );
};

export default Header;
