import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useDispatch} from "react-redux";
import {createNewHabit} from "@/features/habits/slice.ts";
import {useState} from "react";

const CustomHabitForm = ({
  selectedTab,
}: {
  selectedTab: "custom" | "predefined";
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (name.trim().length < 3) {
      console.log("Invalid input");
      return;
    }

    dispatch(
      createNewHabit({
        name: `${name} ${Math.floor(Math.random() * 100)}`,
        description: description,
        type: selectedTab,
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
          <Input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleSubmit}>Create new test habit</button>
    </>
  );
};

export default CustomHabitForm;
