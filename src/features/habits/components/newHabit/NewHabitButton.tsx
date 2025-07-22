import {Button} from "@/shared/ui/button.tsx";
import {Plus} from "lucide-react";

const NewHabitButton = () => {
  return (
    <Button size="sm">
      <Plus /> New Habit
    </Button>
  );
};

export default NewHabitButton;
