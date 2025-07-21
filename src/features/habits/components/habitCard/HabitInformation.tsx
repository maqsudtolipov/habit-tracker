import {Checkbox} from "@/components/ui/checkbox.tsx";
import {toggleProgressStatus} from "@/features/progress/slice.ts";
import {useDispatch, useSelector} from "react-redux";
import type {Habit} from "@/features/habits/types.ts";
import HabitControls from "@/features/habits/components/habitCard/HabitControls.tsx";
import type {RootState} from "@/app/store.ts";
import getFormatedDate from "@/shared/utils/getFormatedDate.ts";
import {Box, Sparkle} from "lucide-react";

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
              id={`checkbox-${habit.id}`}
              className="size-6"
              checked={isCompleted}
              onCheckedChange={handleToggleCompleted}
            />
          </div>
          <div>
            <h2
              className="text-lg font-medium -mb-1 text-neutral-900"
              id={`habit-${habit.id}-name`}
            >
              {habit.name}
            </h2>
            <p className="flex items-center gap-1 text-xs font-normal text-neutral-600">
              {habit.type === "predefined" ? (
                <Box className="size-3" />
              ) : (
                <Sparkle className="size-3" />
              )}

              {habit.type}
            </p>
          </div>
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
