import {Button} from "@/shared/ui/button.tsx";
import {RotateCcw} from "lucide-react";
import type {MouseEventHandler} from "react";

interface HabitDatePickerActionsProps {
  onReset: MouseEventHandler<HTMLButtonElement>;
  onConfirm: MouseEventHandler<HTMLButtonElement>;
  formattedDate: string;
}

const HabitDatePickerActions = ({
  onReset,
  onConfirm,
  formattedDate,
}: HabitDatePickerActionsProps) => {
  return (
    <>
      <Button
        className="size-8"
        variant="outline"
        size="icon"
        onClick={onReset}
        aria-label="Reset selected date"
      >
        <RotateCcw />
      </Button>
      <Button
        size="sm"
        onClick={onConfirm}
        aria-label={`Confirm progress for ${formattedDate}`}
      >
        Confirm
      </Button>
    </>
  );
};

export default HabitDatePickerActions;
