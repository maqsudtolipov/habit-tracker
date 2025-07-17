import {Button} from "@/components/ui/button.tsx";
import {Pencil, Trash2} from "lucide-react";
import ConfirmDialog from "@/shared/ui/ConfirmDialog.tsx";
import {useDispatch} from "react-redux";
import {deleteHabit} from "@/features/habits/slice.ts";
import EditHabitDialog from "@/shared/ui/EditHabitDialog.tsx";
import type {FormEvent} from "react";
import type {Habit} from "@/features/habits/types.ts";

interface HabitControlsProps {
  habit: Habit;
}

const HabitControls = ({ habit }: HabitControlsProps) => {
  const dispatch = useDispatch();

  const handleEditHabit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submit edit");
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
