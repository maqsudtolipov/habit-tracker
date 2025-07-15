import type {Habit} from "@/features/habits/types.ts";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import DatePicker from "@/shared/ui/DatePicker.tsx";
import {useState} from "react";

interface HabitCardProps {
  habit: Habit;
}

const HabitCard = ({ habit }: HabitCardProps) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleToggleCompleted = () => {
    setIsCompleted((prev) => !prev);
  };

  return (
    <li
      className={
        "p-4 flex gap-3 rounded-lg outline-1 outline-gray-200 border border-l-4 border-gray-200/0" +
        (isCompleted ? " border-gray-200/100" : "")
      }
    >
      <div className="pt-1">
        <Checkbox className="size-6" onCheckedChange={handleToggleCompleted} />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-medium">{habit.name}</h2>
          {/*{isCompleted ? (*/}
          {/*  <p className="text-xs text-green-600">Completed</p>*/}
          {/*) : (*/}
          {/*  <p className="text-xs">Not Completed</p>*/}
          {/*)}*/}

          {habit.description && (
            <p className="text-sm text-muted-foreground">{habit.description}</p>
          )}
        </div>
        <div>
          <DatePicker />
        </div>
      </div>
    </li>
  );
};

export default HabitCard;
