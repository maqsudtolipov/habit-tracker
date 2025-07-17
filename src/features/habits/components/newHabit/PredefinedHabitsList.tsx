import {PREDEFINED_HABITS} from "@/features/habits/constants.ts";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";

const PredefinedHabitsList = () => {
  return (
    <ScrollArea className="h-60 rounded-md border">
      <ul className="flex flex-col gap-1 p-4">
        {PREDEFINED_HABITS.map((habit) => (
          <li key={habit.id} className="border-b pb-1">
            <p className="text-black font-medium">{habit.name}</p>
            <p className="text-sm">{habit.description}</p>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
};

export default PredefinedHabitsList;
