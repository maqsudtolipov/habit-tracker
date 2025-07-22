import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/shared/ui/dialog.tsx";

import {useState} from "react";
import NewHabitTabs from "@/features/habits/components/HabitCard/newHabit/NewHabitTabs.tsx";
import {Button} from "@/shared/ui/button.tsx";
import {Plus} from "lucide-react";

const NewHabitDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus /> New Habit
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new habit</DialogTitle>
        </DialogHeader>

        <NewHabitTabs onCloseDialog={() => setIsDialogOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default NewHabitDialog;
