import {Button} from "@/components/ui/button.tsx";
import {Plus} from "lucide-react";
import NewHabitDialog from "@/shared/ui/NewHabitDialog.tsx";

const NewHabitModal = () => {
  return (
    <div>
      <NewHabitDialog>
        <Button size="sm">
          <Plus /> New Habit
        </Button>
      </NewHabitDialog>
    </div>
  );
};

export default NewHabitModal;
