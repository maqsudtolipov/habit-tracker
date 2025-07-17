import {PREDEFINED_HABITS} from "@/features/habits/constants.ts";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";

const PredefinedHabitsList = () => {
  return (
    <>
      <p className="text-sm text-muted-foreground">
        Choose one of the predefined habits here.
      </p>
      <ScrollArea className='h-40 rounded-md border'>
        <ul className='flex flex-col gap-1 p-4'>
          {PREDEFINED_HABITS.map((habit) => (
            <li key={habit.id} className='border-b pb-1'>
              <p className='text-black font-medium'>{habit.name}</p>
              <p className='text-sm'>{habit.description}</p>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </>
  );
};

export default PredefinedHabitsList;
