import {Button} from "@/shared/ui/button.tsx";
import {Pencil, Trash2} from "lucide-react";
import ConfirmDialog from "@/shared/ui/ConfirmDialog.tsx";
import {useDispatch} from "react-redux";
import {deleteHabit} from "@/features/habits/slice.ts";
import EditHabitDialog from "@/features/habits/components/editHabit/EditHabitDialog.tsx";
import {useState} from "react";
import type {Habit} from "@/features/habits/types.ts";
import {useSubmitEditHabitForm} from "@/features/habits/hooks/useSubmitEditHabitForm.ts";

interface HabitControlsProps {
  habit: Habit;
}

const HabitControlButtons = ({ habit }: HabitControlsProps) => {
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { handleSubmit: handleEditSubmit } = useSubmitEditHabitForm(habit, () =>
    setIsDialogOpen(false),
  );
  const handleDeleteHabit = () => dispatch(deleteHabit(habit.id));

  return (
    <div className="p-1 bg-gray-100 rounded-md flex items-center gap-2">
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
      <ConfirmDialog onConfirm={handleDeleteHabit}>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <Trash2 className="w-4 h-4" />
          <span className="sr-only">Delete habit</span>
        </Button>
      </ConfirmDialog>
    </div>
  );
};

export default HabitControlButtons;
