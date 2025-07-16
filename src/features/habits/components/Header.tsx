import DailySummary from "@/features/habits/components/DailySummary.tsx";
import DatePicker from "@/shared/ui/DatePicker.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Plus} from "lucide-react";

const Header = () => {
  return (
    <div className="mb-6     flex items-center justify-between flex-wrap gap-2">
      <DailySummary />

      <div className="flex items-center justify-end flex-1">
        <DatePicker />
        <Button size="sm">
          <Plus /> New Habit
        </Button>
      </div>
    </div>
  );
};

export default Header;
