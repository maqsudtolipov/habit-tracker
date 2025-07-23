import ConfirmDialog from "@/shared/components/ConfirmDialog.tsx";
import {Button} from "@/shared/ui/button.tsx";
import {Trash2} from "lucide-react";
import type {Habit} from "@/features/habits/types.ts";
import {useDispatch} from "react-redux";
import {deleteHabit} from "@/features/habits/slice.ts";
import {deleteHabitProgress} from "@/features/progress/slice.ts";

interface HabitDeleteButtonProps {
  habit: Habit;
}

const DeleteHabitButton = ({ habit }: HabitDeleteButtonProps) => {
  const dispatch = useDispatch();
  const handleDeleteHabit = () => {
    dispatch(deleteHabit(habit.id));
    dispatch(deleteHabitProgress(habit.id));
  };

  return (
    <ConfirmDialog onConfirm={handleDeleteHabit}>
      <Button variant="outline" size="icon" className="h-8 w-8">
        <Trash2 className="w-4 h-4" />
        <span className="sr-only">Delete habit</span>
      </Button>
    </ConfirmDialog>
  );
};

export default DeleteHabitButton;
