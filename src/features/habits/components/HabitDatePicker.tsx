import DatePicker from "@/shared/ui/DatePicker.tsx";
import {Button} from "@/components/ui/button.tsx";
import {XIcon} from "lucide-react";

const HabitDatePicker = () => {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <DatePicker />
      <Button variant="outline" size="sm">
        <XIcon />
      </Button>
      <Button size="sm">Confirm</Button>
    </div>
  );
};

export default HabitDatePicker;
