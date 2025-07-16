import DailySummary from "@/features/habits/components/DailySummary.tsx";
import DatePicker from "@/shared/ui/DatePicker.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Plus} from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="p-2 pl-4 mb-6 bg-gray-50 outline-2 outline-gray-200 rounded-lg">
        <p>
          <span>🔥 For [DATE] </span>
          <DailySummary />
        </p>
      </div>

      <div className="flex justify-end">
        <DatePicker />
        <Button size="sm" className="mb-4">
          <Plus /> New Habit
        </Button>
      </div>
    </>
  );
};

export default Header;
