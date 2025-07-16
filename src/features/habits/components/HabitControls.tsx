import {Button} from "@/components/ui/button.tsx";
import {Pencil, Trash2} from "lucide-react";

const HabitControls = () => {
  return (
    <div className="p-1 bg-gray-100 rounded-md flex items-center gap-2">
      <Button variant="outline" size="icon" className="h-8 w-8">
        <Pencil className="w-4 h-4" />
        <span className="sr-only">Edit habit</span>
      </Button>
      <Button variant='outline' size="icon" className="h-8 w-8">
        <Trash2 className="w-4 h-4" />
        <span className="sr-only">Delete habit</span>
      </Button>
    </div>
  );
};

export default HabitControls;
