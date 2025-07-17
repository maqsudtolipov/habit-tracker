import {Button} from "@/components/ui/button.tsx";
import {Pencil, Trash2} from "lucide-react";
import ConfirmDialog from "@/shared/ui/ConfirmDialog.tsx";
import {useDispatch} from "react-redux";
import {deleteHabit, editHabit} from "@/features/habits/slice.ts";
import EditHabitDialog from "@/shared/ui/EditHabitDialog.tsx";
import {type FormEvent, useState} from "react";
import type {Habit} from "@/features/habits/types.ts";
import {MAX_DESCRIPTION_LENGTH, MAX_NAME_LENGTH,} from "@/features/habits/constants.ts";

interface HabitControlsProps {
  habit: Habit;
}

const HabitControls = ({ habit }: HabitControlsProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleCloseDialog = () => setIsDialogOpen(false);
  const dispatch = useDispatch();

  // INFO: Edit and Create forms can be merged
  const handleEditHabit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name")?.toString().trim() ?? "",
      description: formData.get("description")?.toString().trim() ?? "",
    };

    // Validate
    if (
      !data.name ||
      data.name.length < 3 ||
      data.name.length > MAX_NAME_LENGTH ||
      data.description.length > MAX_DESCRIPTION_LENGTH
    ) {
      return;
    }

    dispatch(
      editHabit({
        id: habit.id,
        name: `${data.name} ${Math.floor(Math.random() * 100)}`,
        description: data.description,
      }),
    );

    handleCloseDialog();
  };

  const handleDeleteHabit = () => {
    dispatch(deleteHabit(habit.id));
  };

  return (
    <div className="p-1 bg-gray-100 rounded-md flex items-center gap-2">
      <EditHabitDialog
        defaultNameValue={habit.name}
        defaultDescriptionValue={habit.description}
        handleSubmit={handleEditHabit}
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

export default HabitControls;
