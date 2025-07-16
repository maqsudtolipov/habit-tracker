import {Checkbox} from "@/components/ui/checkbox.tsx";
import {toggleProgressStatus} from "@/features/progress/slice.ts";
import {useDispatch} from "react-redux";
import getTodaysDate from "@/shared/utils/getTodaysDate.ts";
import type {Habit} from "@/features/habits/types.ts";

interface HabitInformationProps {
  habit: Habit;
  isCompleted: boolean;
}

const HabitInformation = ({ habit, isCompleted }: HabitInformationProps) => {
  const dispatch = useDispatch();

  const handleToggleCompleted = () => {
    dispatch(
      toggleProgressStatus({
        date: getTodaysDate(),
        habitId: habit.id,
      }),
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-3 ">
        <div className="pt-1">
          <Checkbox
            className="size-6"
            checked={isCompleted}
            onCheckedChange={handleToggleCompleted}
          />
        </div>
        <h2 className="text-lg font-medium">
          <p className="-mb-1">{habit.name}</p>
          <p className="text-xs text-muted-foreground">{habit.type}</p>
        </h2>
      </div>

      {habit.description && (
        <p className="text-sm text-muted-foreground">{habit.description}</p>
      )}
    </div>
  );
};

export default HabitInformation;
