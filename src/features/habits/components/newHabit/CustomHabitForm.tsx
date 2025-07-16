import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";

const CustomHabitForm = () => {
  return (
    <>
      <p className="text-sm text-muted-foreground">
        Create a custom habit here.
      </p>
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name">* Name</Label>
          <Input id="name" name="name" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="description">Description</Label>
          <Input id="description" name="description" />
        </div>
      </div>
    </>
  );
};

export default CustomHabitForm;
