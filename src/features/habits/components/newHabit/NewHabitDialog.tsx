import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog.tsx";

import {type ReactNode, useState} from "react";
import NewHabitTabs from "@/features/habits/components/newHabit/NewHabitTabs.tsx";

const NewHabitDialog = ({ children }: { children: ReactNode }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleCloseDialog = () => setIsDialogOpen(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new habit</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <NewHabitTabs onCloseDialog={handleCloseDialog} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewHabitDialog;
