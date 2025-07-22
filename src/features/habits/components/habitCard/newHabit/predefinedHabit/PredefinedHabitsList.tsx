import {PREDEFINED_HABITS} from "@/features/habits/constants.ts";
import {ScrollArea} from "@/shared/ui/scroll-area.tsx";
import {useState} from "react";
import {DialogClose, DialogFooter} from "@/shared/ui/dialog.tsx";
import {Button} from "@/shared/ui/button.tsx";
import {useSubmitEditHabitForm} from "@/features/habits/hooks/useSubmitEditHabitForm.ts";
import PredefinedHabitItem
    from "@/features/habits/components/habitCard/newHabit/predefinedHabit/PredefinedHabitItem.tsx";

const PredefinedHabitsList = ({
  onCloseDialog,
}: {
  onCloseDialog: () => void;
}) => {
  const [selectedHabitId, setSelectedHabitId] = useState<null | string>(null);

  const { handleSubmit } = useSubmitEditHabitForm("createNew", onCloseDialog);

  const handleSelectHabit = (id: string) => {
    setSelectedHabitId(id);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <ScrollArea className="h-60 rounded-md border">
        <ul
          className="flex flex-col gap-2 p-2 pr-4"
          role="radiogroup"
          aria-label="Predefined habit selection"
        >
          {PREDEFINED_HABITS.map((habit) => (
            <PredefinedHabitItem
              habit={habit}
              selectedHabitId={selectedHabitId}
              onSelectHabit={handleSelectHabit}
            />
          ))}
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
