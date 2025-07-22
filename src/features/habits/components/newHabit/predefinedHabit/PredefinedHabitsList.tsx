import {PREDEFINED_HABITS} from "@/features/habits/constants.ts";
import {ScrollArea} from "@/shared/ui/scroll-area.tsx";
import {useState} from "react";
import {DialogClose, DialogFooter} from "@/shared/ui/dialog.tsx";
import {Button} from "@/shared/ui/button.tsx";
import {useSubmitEditHabitForm} from "@/features/habits/hooks/useSubmitEditHabitForm.ts";

const PredefinedHabitsList = ({
  onCloseDialog,
}: {
  onCloseDialog: () => void;
}) => {
  const [selectedHabitId, setSelectedHabitId] = useState<null | string>(null);

  const { handleSubmit } = useSubmitEditHabitForm("createNew", onCloseDialog);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <ScrollArea className="h-60 rounded-md border">
        <ul
          className="flex flex-col gap-2 p-2 pr-4"
          role="radiogroup"
          aria-label="Predefined habit selection"
        >
          {PREDEFINED_HABITS.map((habit) => {
            const isSelected = habit.id === selectedHabitId;

            return (
              <li
                key={habit.id}
                className={`p-2 rounded focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]  ${isSelected && " bg-neutral-100 outline-2 outline-neutral-200"}`}
                onClick={() => setSelectedHabitId(habit.id)}
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedHabitId(habit.id);
                  }
                }}
              >
                <p className="text-black font-medium">{habit.name}</p>
                <p className="text-sm">{habit.description}</p>
              </li>
            );
          })}
        </ul>
      </ScrollArea>

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
