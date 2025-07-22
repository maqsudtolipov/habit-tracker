import DatePicker from "@/shared/ui/DatePicker.tsx";
import type {Habit} from "@/features/habits/types.ts";
import HabitDatePickerActions from "@/features/habits/components/HabitCard/datePicker/HabitDatePickerActions.tsx";
import {useHabitDatePicker} from "@/features/habits/hooks/useHabitDatePicker.ts";

const HabitDatePicker = ({ habit }: { habit: Habit }) => {
  const {
    selectedDate,
    formattedDate,
    isAlreadyCompleted,
    isToday,
    handlePickDate,
    handleConfirm,
    handleReset,
  } = useHabitDatePicker(habit);

  return (
    <div className="flex items-center gap-2 shrink-0">
      <span id={`date-label-${habit.id}`} className="sr-only">
        Select date to mark habit "{habit.name}" as complete
      </span>
      <DatePicker value={selectedDate} onChange={handlePickDate} />
      {!isAlreadyCompleted && !isToday ? (
        <HabitDatePickerActions
          onReset={handleReset}
          onConfirm={handleConfirm}
          formattedDate={formattedDate}
        />
      ) : (
        // This is due to card changing height when date picked
        <div className="w-[116px]"></div>
      )}
    </div>
  );
};

export default HabitDatePicker;
