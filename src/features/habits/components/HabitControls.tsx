import {Button} from "@/components/ui/button.tsx";
import {Pencil, Trash2} from "lucide-react";
import ConfirmDialog from "@/shared/ui/ConfirmDialog.tsx";

const HabitControls = () => {
  return (
    <div className="p-1 bg-gray-100 rounded-md flex items-center gap-2">
      <Button variant="outline" size="icon" className="h-8 w-8">
        <Pencil className="w-4 h-4" />
        <span className="sr-only">Edit habit</span>
      </Button>
      <ConfirmDialog onConfirm={() => console.log("Confirmed")}>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <Trash2 className="w-4 h-4" />
          <span className="sr-only">Delete habit</span>
        </Button>
      </ConfirmDialog>
    </div>
  );
};

export default HabitControls;
