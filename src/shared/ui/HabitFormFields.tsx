import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import type {FormEvent} from "react";
import {DialogClose, DialogFooter} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";

interface HabitFormFieldsProps {
  defaultNameValue?: string;
  defaultDescriptionValue?: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const HabitFormFields = ({
  defaultNameValue = "",
  defaultDescriptionValue = "",
  handleSubmit,
}: HabitFormFieldsProps) => {
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name">* Name</Label>
          <Input id="name" name="name" defaultValue={defaultNameValue} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            name="description"
            defaultValue={defaultDescriptionValue}
          />
        </div>
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </form>
  );
};

export default HabitFormFields;
