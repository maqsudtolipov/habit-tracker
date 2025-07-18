import DatePicker from "@/shared/ui/DatePicker.tsx";
import {Button} from "@/components/ui/button.tsx";
import {XIcon} from "lucide-react";
import getFormatedDate from "@/shared/utils/getFormatedDate.tsx";
import {useState} from "react";

const HabitDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handlePickDate = (date: Date) => {
    // Change date
    setSelectedDate(date);

    console.log("pick date", getFormatedDate(date));

    // Check whether habit + date exist
  };

  return (
    <div className="flex items-center gap-2 shrink-0">
      <DatePicker value={selectedDate} onChange={handlePickDate} />
      <Button variant="outline" size="sm">
        <XIcon />
      </Button>
      <Button size="sm">Confirm</Button>
    </div>
  );
};

export default HabitDatePicker;
