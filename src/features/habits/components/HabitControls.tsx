import {Button} from "@/components/ui/button.tsx";
import {Pencil, Trash2} from "lucide-react";
import ConfirmDialog from "@/shared/ui/ConfirmDialog.tsx";
import {useDispatch} from "react-redux";
import {deleteHabit} from "@/features/habits/slice.ts";

interface HabitControlsProps {
  habitId: string;
}

const HabitControls = ({ habitId }: HabitControlsProps) => {
  const dispatch = useDispatch();

  const handleDeleteHabit = () => {
    dispatch(deleteHabit(habitId));
  };

  return (
    <div className="p-1 bg-gray-100 rounded-md flex items-center gap-2">
      <Button variant="outline" size="icon" className="h-8 w-8">
        <Pencil className="w-4 h-4" />
        <span className="sr-only">Edit habit</span>
      </Button>
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
