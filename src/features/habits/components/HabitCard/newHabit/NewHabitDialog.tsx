import NewHabitTabs from "@/features/habits/components/HabitCard/newHabit/NewHabitTabs.tsx";
import {Button} from "@/shared/ui/button.tsx";
import {Plus} from "lucide-react";
import DialogWrapper from "@/shared/components/DialogWrapper.tsx";

const NewHabitDialog = () => {
  return (
    <DialogWrapper
      title="Create a new habit"
      trigger={
        <Button size="sm">
          <Plus /> New Habit
        </Button>
      }
    >
      {(onClose) => <NewHabitTabs onCloseDialog={onClose} />}
    </DialogWrapper>
  );
};

export default NewHabitDialog;
