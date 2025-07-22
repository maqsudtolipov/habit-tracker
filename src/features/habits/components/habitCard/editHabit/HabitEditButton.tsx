import {Button} from "@/shared/ui/button.tsx";
import type {Habit} from "@/features/habits/types.ts";
import {useState} from "react";
import {useSubmitEditHabitForm} from "@/features/habits/hooks/useSubmitEditHabitForm.ts";
import {Pencil} from "lucide-react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/shared/ui/dialog.tsx";
import HabitFormFields from "@/shared/components/HabitFormFields.tsx";

interface HabitEditButtonProps {
  habit: Habit;
}

const HabitEditButton = ({ habit }: HabitEditButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { handleSubmit } = useSubmitEditHabitForm(
    "edit",
    () => setIsDialogOpen(false),
    habit.id,
  );

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <Pencil className="w-4 h-4" />
          <span className="sr-only">Edit habit</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit habit</DialogTitle>
        </DialogHeader>

        <HabitFormFields
          defaultNameValue={habit.name}
          defaultDescriptionValue={habit.description}
          handleSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
};

export default HabitEditButton;
