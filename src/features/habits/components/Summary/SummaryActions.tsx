import DatePicker from "@/shared/components/DatePicker.tsx";
import {changeSelectedDate} from "@/features/habits/slice.ts";
import NewHabitDialog from "@/features/habits/components/NewHabit/NewHabitDialog.tsx";
import {useAppDispatch, useAppSelector} from "@/app/hooks.ts";

const SummaryActions = () => {
  const dispatch = useAppDispatch();
  const selectedDate = useAppSelector((state) => state.habits.selectedDate);

  const handleDateChange = (date: Date) => {
    dispatch(changeSelectedDate(date.toISOString()));
  };

  return (
    <div className="flex items-center justify-end flex-1">
      <div>
        <label id="date-label" className="sr-only">
          Pick date to see habit progress
        </label>
        <DatePicker
          value={new Date(selectedDate)}
          onChange={handleDateChange}
          ariaLabelledBy="date-label"
        />
      </div>
      <NewHabitDialog />
    </div>
  );
};

export default SummaryActions;
