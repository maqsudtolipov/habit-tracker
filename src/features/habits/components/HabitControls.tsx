import {Button} from "@/components/ui/button.tsx";
import {Pencil, Trash2} from "lucide-react";

const HabitControls = () => {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon">
        <Pencil className="w-4 h-4" />
        <span className="sr-only">Edit habit</span>
      </Button>
      <Button size="icon">
        <Trash2 className="w-4 h-4" />
        <span className="sr-only">Delete habit</span>
      </Button>
    </div>
  );
};

export default HabitControls;
