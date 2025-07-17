import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs.tsx";
import CustomHabitForm from "@/features/habits/components/newHabit/CustomHabitForm.tsx";
import {type FormEvent, useState} from "react";
import PredefinedHabitsList from "@/features/habits/components/newHabit/PredefinedHabitsList.tsx";
import {useDispatch} from "react-redux";
import {createNewHabit} from "@/features/habits/slice.ts";
import {DialogClose, DialogFooter} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {PREDEFINED_HABITS} from "@/features/habits/constants.ts";

const NewHabitTabs = () => {
  const [selectedTab, setSelectedTab] = useState("predefined");
  const [selectedHabitId, setSelectedHabitId] = useState<null | string>(null);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedTab === "custom") {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name"),
        description: formData.get("description") || "",
      };

      // Validate
      if (!data.name || data.name.trim().length < 3) {
        return;
      }

      dispatch(
        createNewHabit({
          name: `${data.name} ${Math.floor(Math.random() * 100)}`,
          description: data.description,
          type: "custom",
        }),
      );
    }

    if (selectedTab === "predefined") {
      const selectedHabit = PREDEFINED_HABITS.find(
        (habit) => habit.id === selectedHabitId,
      );

      if (!selectedHabit) return;

      dispatch(
        createNewHabit({
          name: `${selectedHabit.name} ${Math.floor(Math.random() * 100)}`,
          description: selectedHabit.description,
          type: "predefined",
        }),
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Tabs
        className="w-full gap-4"
        value={selectedTab}
        onValueChange={setSelectedTab}
      >
        <TabsList>
          <TabsTrigger value="predefined">Predefined</TabsTrigger>
          <TabsTrigger value="custom">Custom</TabsTrigger>
        </TabsList>
        <TabsContent className="flex flex-col gap-4" value="custom">
          <CustomHabitForm />
        </TabsContent>
        <TabsContent
          className="text-sm text-muted-foreground"
          value="predefined"
        >
          <PredefinedHabitsList
            selectedHabitId={selectedHabitId}
            onSelectHabit={setSelectedHabitId}
          />
        </TabsContent>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </Tabs>
    </form>
  );
};

export default NewHabitTabs;
