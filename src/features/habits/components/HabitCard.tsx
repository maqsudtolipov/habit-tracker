import type {Habit} from "@/features/habits/types.ts";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import DatePicker from "@/shared/ui/DatePicker.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Button} from "@/components/ui/button.tsx";
import {XIcon} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import {toggleProgressStatus} from "@/features/progress/slice.ts";
import getTodaysDate from "@/shared/utils/getTodaysDate.ts";

const today = getTodaysDate();
const randomMe = () => Math.random() > 0.5;

interface HabitCardProps {
  habit: Habit;
}

const HabitCard = ({ habit }: HabitCardProps) => {
  const progress = useSelector((state: RootState) => state.progress);
  const dispatch = useDispatch();

  const todayProgress = progress
    .filter((progress) => progress.date === today)
    .find(
      (progress) => progress.date === today && progress.habitId === habit.id,
    );

  const handleToggleCompleted = () => {
    dispatch(
      toggleProgressStatus({
        date: today,
        habitId: habit.id,
      }),
    );
  };

  const isCompleted = todayProgress?.status === "completed";

  return (
    <li>
      <Label
        className={
          "h-full items-start p-4 rounded-lg outline-1 outline-gray-200 border border-l-4 border-gray-200/0" +
          (isCompleted ? " border-gray-200/100" : "")
        }
      >
        <div className="flex flex-col gap-4">
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
                <p className="text-xs text-muted-foreground">
                  {randomMe() ? "Custom" : "Default"}
                </p>
              </h2>
            </div>

            {habit.description && (
              <p className="text-sm text-muted-foreground">
                {habit.description}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <DatePicker />
            <Button variant="outline" size="sm">
              <XIcon />
            </Button>
            <Button size="sm">Confirm</Button>
          </div>
          {todayProgress && (
            <p className="text-xs text-muted-foreground">📚 stored</p>
          )}
        </div>
      </Label>
    </li>
  );
};

export default HabitCard;
