import {Button} from "@/shared/ui/button.tsx";
import type {Habit} from "@/features/habits/types.ts";
import {Pencil} from "lucide-react";
import HabitFormFields from "@/shared/components/HabitFormFields.tsx";
import DialogWrapper from "@/shared/components/DialogWrapper.tsx";

interface HabitEditButtonProps {
  habit: Habit;
}

const EditHabitButton = ({ habit }: HabitEditButtonProps) => {
  return (
    <DialogWrapper
      title="Edit habit"
      trigger={
        <Button variant="outline" size="icon" className="h-8 w-8">
          <Pencil className="w-4 h-4" />
          <span className="sr-only">Edit habit</span>
        </Button>
      }
    >
      {(onClose) => (
        <HabitFormFields type="edit" habit={habit} onClose={onClose} />
      )}
    </DialogWrapper>
  );
};

export default EditHabitButton;
