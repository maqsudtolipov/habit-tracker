import {Checkbox} from "@/components/ui/checkbox.tsx";
import {toggleProgressStatus} from "@/features/progress/slice.ts";
import {useDispatch, useSelector} from "react-redux";
import type {Habit} from "@/features/habits/types.ts";
import HabitControls from "@/features/habits/components/habitCard/HabitControls.tsx";
import type {RootState} from "@/app/store.ts";
import getFormatedDate from "@/shared/utils/getFormatedDate.ts";

interface HabitInformationProps {
  habit: Habit;
  isCompleted: boolean;
}

const HabitInformation = ({ habit, isCompleted }: HabitInformationProps) => {
  const selectedDate = useSelector(
    (state: RootState) => state.habits.selectedDate,
  );
  const dispatch = useDispatch();

  const handleToggleCompleted = () => {
    dispatch(
      toggleProgressStatus({
        date: getFormatedDate(selectedDate),
        habitId: habit.id,
      }),
    );
  };

  return (
    <div className="mb-2 flex flex-col gap-2 flex-1">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-3">
          <div className="pt-1">
            <Checkbox
              className="size-6"
              checked={isCompleted}
              onCheckedChange={handleToggleCompleted}
            />
          </div>
          <h2 className="text-lg font-medium">
            <p className="-mb-1 text-neutral-900">{habit.name}</p>
            <p className="text-xs text-neutral-600">{habit.type}</p>
          </h2>
        </div>

        {habit.type === "custom" && <HabitControls habit={habit} />}
      </div>

      {habit.description && (
        <p className="text-sm text-neutral-500">{habit.description}</p>
      )}
    </div>
  );
};

export default HabitInformation;
