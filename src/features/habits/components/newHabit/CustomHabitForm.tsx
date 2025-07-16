import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useDispatch} from "react-redux";
import {createNewHabit} from "@/features/habits/slice.ts";

const CustomHabitForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      createNewHabit({
        name: "newHabit " + Math.floor(Math.random() * 100),
        description: "",
        type: "custom",
      }),
    );
  };

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
      <button onClick={handleSubmit}>Create new test habit</button>
    </>
  );
};

export default CustomHabitForm;
