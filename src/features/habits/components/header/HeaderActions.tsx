import {useEffect, useState} from "react";
import DatePicker from "@/shared/ui/DatePicker.tsx";
import NewHabitTriggerButton from "@/features/habits/components/newHabit/NewHabitTriggerButton.tsx";
import {useDispatch} from "react-redux";
import {changeSelectedDate} from "@/features/habits/slice.ts";

const HeaderActions = () => {
  const [filterDate, setFilterDate] = useState(new Date());

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSelectedDate(filterDate));
  }, [dispatch, filterDate]);

  return (
    <div className="flex items-center justify-end flex-1">
      <DatePicker value={filterDate} onChange={setFilterDate} />
      <NewHabitTriggerButton />
    </div>
  );
};

export default HeaderActions;
