import HabitDatePicker from "@/features/habits/components/habitCard/HabitDatePicker.tsx";
import {Link} from "react-router-dom";
import {ChevronRightIcon} from "lucide-react";
import type {Habit} from "@/features/habits/types.ts";

interface HabitFooterProps {
  habit: Habit;
}

const HabitFooter = ({ habit }: HabitFooterProps) => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
      <HabitDatePicker habit={habit} />
      <Link
        className="self-start flex items-center gap-0/5 text-sm text-neutral-600 font-medium hover:underline sm:self-auto"
        to={`/habit/${habit.id}`}
        aria-label={`See details for ${habit.name}`}
      >
        See details <ChevronRightIcon className="size-4" />
      </Link>
    </div>
  );
};

export default HabitFooter;
