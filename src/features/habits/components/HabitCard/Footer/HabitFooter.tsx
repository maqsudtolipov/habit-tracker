import HabitDatePicker from "@/features/habits/components/HabitCard/Footer/HabitDatePicker.tsx";
import {Link} from "react-router-dom";
import {ChevronRightIcon} from "lucide-react";
import type {Habit} from "@/features/habits/types.ts";

interface HabitFooterProps {
  habit: Habit;
}

const HabitFooter = ({ habit }: HabitFooterProps) => {
  return (
    <div className="flex gap-2 flex-wrap justify-between">
      <HabitDatePicker habit={habit} />
      <Link
        className=" flex items-center gap-0/5 text-sm text-neutral-600 font-medium hover:underline sm:self-auto"
        to={`/habit/${habit.id}`}
        aria-label={`See details for ${habit.name}`}
      >
        See details <ChevronRightIcon className="size-4" />
      </Link>
    </div>
  );
};

export default HabitFooter;
