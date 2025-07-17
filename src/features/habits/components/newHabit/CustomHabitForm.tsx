import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";

const CustomHabitForm = () => {
  return (
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
  );
};

export default CustomHabitForm;
