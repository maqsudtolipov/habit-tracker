import {Button} from "@/shared/ui/button.tsx";
import {Plus} from "lucide-react";
import NewHabitDialog from "@/features/habits/components/newHabit/NewHabitDialog.tsx";

const NewHabitTriggerButton = () => {
  return (
    <NewHabitDialog>
      <Button size="sm">
        <Plus /> New Habit
      </Button>
    </NewHabitDialog>
  );
};

export default NewHabitTriggerButton;
