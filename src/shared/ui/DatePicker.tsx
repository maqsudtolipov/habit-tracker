import React from "react";
import {Popover, PopoverContent, PopoverTrigger,} from "@radix-ui/react-popover";
import {CalendarIcon, ChevronDownIcon} from "lucide-react";
import {Calendar} from "@/shared/ui/calendar.tsx";
import {Button} from "@/shared/ui/button.tsx";

interface DatePickerProps {
  value: string; // ISO string
  onChange: (date: Date) => void;
}

const DatePicker = ({ value, onChange }: DatePickerProps) => {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (date: Date | undefined) => {
    if (date && onChange) {
      onChange(date);
    }
    setOpen(false);
  };

  const valueAsDate = new Date(value);

  return (
    <div className="flex flex-col gap-3 pr-[1ch]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-36 justify-between font-normal"
            size="sm"
            aria-label={`Pick a date. Currently selected: ${valueAsDate.toLocaleDateString()}`}
          >
            <CalendarIcon />
            {valueAsDate ? valueAsDate.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden mt-2 shadow-lg outline outline-accent rounded-lg"
          align="start"
        >
          <Calendar
            mode="single"
            selected={valueAsDate}
            captionLayout="dropdown"
            onSelect={handleSelect}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
