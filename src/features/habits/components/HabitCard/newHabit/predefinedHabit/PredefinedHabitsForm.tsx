import {PREDEFINED_HABITS} from "@/features/habits/constants.ts";
import {ScrollArea} from "@/shared/ui/scroll-area.tsx";
import {type FormEvent, useState} from "react";
import {DialogClose, DialogFooter} from "@/shared/ui/dialog.tsx";
import {Button} from "@/shared/ui/button.tsx";
import PredefinedHabitItem
  from "@/features/habits/components/HabitCard/newHabit/predefinedHabit/PredefinedHabitItem.tsx";
import {useSubmitPredefinedHabit} from "@/features/habits/hooks/useSubmitPredefinedHabit.ts";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";

const PredefinedHabitsForm = ({
  onCloseDialog,
}: {
  onCloseDialog: () => void;
}) => {
  const habits = useSelector((state: RootState) => state.habits.habits);
  const [selectedHabitId, setSelectedHabitId] = useState<null | string>(null);
  const { handleSubmit } = useSubmitPredefinedHabit(onCloseDialog);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const habit = PREDEFINED_HABITS.find(
      (habit) => habit.id === selectedHabitId,
    );
    if (!habit) return;

    handleSubmit(habit.id, habit.name, habit.description);
  };

  const filteredHabits = PREDEFINED_HABITS.filter(
    (habit) => !habits.find((storedHabit) => habit.id === storedHabit.id),
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
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </form>
  );
};

export default PredefinedHabitsForm;
