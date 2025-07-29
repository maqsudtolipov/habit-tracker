import {PREDEFINED_HABITS} from "@/features/habits/constants.ts";
import {ScrollArea} from "@/shared/ui/scroll-area.tsx";
import {type FormEvent, useMemo, useState} from "react";
import {DialogClose, DialogFooter} from "@/shared/ui/dialog.tsx";
import {Button} from "@/shared/ui/button.tsx";
import PredefinedHabitItem from "@/features/habits/components/NewHabit/PredefinedHabit/PredefinedHabitItem.tsx";
import {useAppDispatch, useAppSelector} from "@/app/hooks.ts";
import {createNewHabit} from "@/features/habits/slice.ts";
import {toast} from "sonner";

const PredefinedHabitsForm = ({
  onCloseDialog,
}: {
  onCloseDialog: () => void;
}) => {
  const habitsList = useAppSelector((state) => state.habits.habitsList);
  const [selectedHabitId, setSelectedHabitId] = useState<null | string>(null);
  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const habit = PREDEFINED_HABITS.find(
      (habit) => habit.id === selectedHabitId,
    );
    if (!habit) return;

    const { id, name, description } = habit;

    dispatch(createNewHabit({ id, name, description, type: "predefined" }));
    toast.success(`New habit is created`);

    onCloseDialog();
  };

  const filteredHabits = useMemo(
    () =>
      PREDEFINED_HABITS.filter(
        (habit) =>
          !habitsList.find((storedHabit) => habit.id === storedHabit.id),
      ),
    [habitsList],
  );

  return (
    <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
      <ScrollArea className="h-60 rounded-md border">
        {filteredHabits.length > 0 ? (
          <ul
            className="flex flex-col gap-2 p-2 pr-4"
            role="radiogroup"
            aria-label="Predefined habit selection"
          >
            {filteredHabits.map((habit) => (
              <PredefinedHabitItem
                key={habit.id}
                habit={habit}
                selectedHabitId={selectedHabitId}
                onSelectHabit={setSelectedHabitId}
              />
            ))}
          </ul>
        ) : (
          <p className="p-4">
            You already selected all the predefined habits. You can create a
            custom one on the next tab.
          </p>
        )}
      </ScrollArea>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="submit" disabled={!selectedHabitId}>
          Save changes
        </Button>
      </DialogFooter>
    </form>
  );
};

export default PredefinedHabitsForm;
