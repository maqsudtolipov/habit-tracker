import {Popover, PopoverContent, PopoverTrigger,} from "@radix-ui/react-popover";
import {CalendarIcon, ChevronDownIcon} from "lucide-react";
import {Calendar} from "@/shared/ui/calendar.tsx";
import {Button} from "@/shared/ui/button.tsx";
import {useState} from "react";

interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

const DatePicker = ({
  value,
  onChange,
  ariaLabel,
  ariaLabelledBy,
}: DatePickerProps) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (date: Date | undefined) => {
    if (date) {
      onChange(date);
      setOpen(false);
    }
  };

  const label = value.toLocaleDateString();

  return (
    <div className="flex flex-col gap-3 pr-[1ch]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-36 justify-between font-normal"
            size="sm"
            aria-label={
              ariaLabel ?? `Pick a date. Currently selected: ${label}`
            }
            aria-labelledby={ariaLabelledBy}
          >
            <CalendarIcon />
            {label}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden mt-2 shadow-lg outline outline-accent rounded-lg"
          align="start"
        >
          <Calendar
            mode="single"
            selected={value}
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
