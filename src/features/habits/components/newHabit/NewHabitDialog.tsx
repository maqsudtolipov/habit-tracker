import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/shared/ui/dialog.tsx";

import {useState} from "react";
import NewHabitTabs from "@/features/habits/components/newHabit/NewHabitTabs.tsx";
import NewHabitButton from "@/features/habits/components/newHabit/NewHabitButton.tsx";

const NewHabitDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <NewHabitButton />
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
