import {PREDEFINED_HABITS} from "@/features/habits/constants.ts";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {useState} from "react";

const PredefinedHabitsList = () => {
  const [selectedHabitId, setSelectedHabitId] = useState<null | string>(null);

  return (
    <ScrollArea className="h-60 rounded-md border">
      <ul className="flex flex-col gap-2 p-2 pr-4">
        {PREDEFINED_HABITS.map((habit) => {
          const isSelected = habit.id === selectedHabitId;

          return (
            <li
              key={habit.id}
              className={`p-2 rounded select-none ${isSelected && "outline-2 outline-black/50"}`}
              onClick={() => setSelectedHabitId(habit.id)}
            >
              <p className="text-black font-medium">{habit.name}</p>
              <p className="text-sm">{habit.description}</p>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  );
};

export default PredefinedHabitsList;
