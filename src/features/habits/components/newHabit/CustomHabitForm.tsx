import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {DialogClose, DialogFooter} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useDispatch} from "react-redux";
import type {FormEvent} from "react";
import {MAX_DESCRIPTION_LENGTH, MAX_NAME_LENGTH,} from "@/features/habits/constants.ts";
import {createNewHabit} from "@/features/habits/slice.ts";

interface CustomHabitFormProps {
  onCloseDialog: () => void;
}

const CustomHabitForm = ({ onCloseDialog }: CustomHabitFormProps) => {
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name")?.toString().trim() ?? "",
      description: formData.get("description")?.toString().trim() ?? "",
    };

    // Validate
    if (
      !data.name ||
      data.name.length < 3 ||
      data.name.length > MAX_NAME_LENGTH ||
      data.description.length > MAX_DESCRIPTION_LENGTH
    ) {
      return;
    }

    dispatch(
      createNewHabit({
        name: `${data.name} ${Math.floor(Math.random() * 100)}`,
        description: data.description,
        type: "custom",
      }),
    );

    onCloseDialog();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-60 flex flex-col gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name">* Name</Label>
          <Input id="name" name="name" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="description">Description</Label>
          <Input id="description" name="description" />
        </div>
      </div>

      {/* NOTE: DUPLICATED on each tab */}
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </form>
  );
};

export default CustomHabitForm;
