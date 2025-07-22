import DatePicker from "@/shared/ui/DatePicker.tsx";
import NewHabitTriggerButton from "@/features/habits/components/newHabit/NewHabitTriggerButton.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import {changeSelectedDate} from "@/features/habits/slice.ts";

const HeaderActions = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state: RootState) => state.habits.selectedDate,
  );

  const handleDateChange = (date: Date) => {
    dispatch(changeSelectedDate(date));
  };

  return (
    <div className="flex items-center justify-end flex-1">
      <DatePicker value={selectedDate} onChange={handleDateChange} />
      <NewHabitTriggerButton />
    </div>
  );
};

export default HeaderActions;
