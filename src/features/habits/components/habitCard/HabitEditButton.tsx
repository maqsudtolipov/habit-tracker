import {Button} from "@/shared/ui/button.tsx";
import EditHabitDialog from "@/features/habits/components/editHabit/EditHabitDialog.tsx";
import type {Habit} from "@/features/habits/types.ts";
import {useState} from "react";
import {useSubmitEditHabitForm} from "@/features/habits/hooks/useSubmitEditHabitForm.ts";
import {Pencil} from "lucide-react";

interface HabitEditButtonProps {
  habit: Habit;
}

const HabitEditButton = ({ habit }: HabitEditButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { handleSubmit: handleEditSubmit } = useSubmitEditHabitForm(
    "edit",
    () => setIsDialogOpen(false),
    habit.id,
  );

  return (
    <EditHabitDialog
      defaultNameValue={habit.name}
      defaultDescriptionValue={habit.description}
      handleSubmit={handleEditSubmit}
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
    >
      <Button variant="outline" size="icon" className="h-8 w-8">
        <Pencil className="w-4 h-4" />
        <span className="sr-only">Edit habit</span>
      </Button>
    </EditHabitDialog>
  );
};

export default HabitEditButton;
