import {PREDEFINED_HABITS} from "@/features/habits/constants.ts";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {createNewHabit} from "@/features/habits/slice.ts";
import type {FormEvent} from "react";
import {useDispatch} from "react-redux";
import {DialogClose, DialogFooter} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";

const PredefinedHabitsList = ({
  selectedHabitId,
  onSelectHabit,
  onCloseDialog,
}: {
  selectedHabitId: string | null;
  onSelectHabit: (id: string) => void;
  onCloseDialog: () => void;
}) => {
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedHabit = PREDEFINED_HABITS.find(
      (habit) => habit.id === selectedHabitId,
    );

    if (!selectedHabit) return;

    dispatch(
      createNewHabit({
        name: `${selectedHabit.name} ${Math.floor(Math.random() * 100)}`,
        description: selectedHabit.description,
        type: "predefined",
      }),
    );

    onCloseDialog();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <ScrollArea className="h-60 rounded-md border">
        <ul className="flex flex-col gap-2 p-2 pr-4">
          {PREDEFINED_HABITS.map((habit) => {
            const isSelected = habit.id === selectedHabitId;

            return (
              <li
                key={habit.id}
                className={`p-2 rounded select-none ${isSelected && " bg-neutral-100 outline-2 outline-neutral-200"}`}
                onClick={() => onSelectHabit(habit.id)}
              >
                <p className="text-black font-medium">{habit.name}</p>
                <p className="text-sm">{habit.description}</p>
              </li>
            );
          })}
        </ul>
      </ScrollArea>

      {/* NOTE: DUPLICATED on each tab */}
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </form>
  );
};

export default PredefinedHabitsList;
