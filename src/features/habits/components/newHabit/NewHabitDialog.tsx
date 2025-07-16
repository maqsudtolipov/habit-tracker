import {Button} from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";

import type {FormEvent, ReactNode} from "react";
import NewHabitTabs from "@/features/habits/components/newHabit/NewHabitTabs.tsx";
import {createNewHabit} from "@/features/habits/slice.ts";
import {useDispatch} from "react-redux";

const NewHabitDialog = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("handleSubmit", e);

    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
    };

    dispatch(
      createNewHabit({
        name: `${data.name} ${Math.floor(Math.random() * 100)}`,
        description: data.description,
        type: "custom",
      }),
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create a new habit</DialogTitle>
          </DialogHeader>

          <NewHabitTabs />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewHabitDialog;
