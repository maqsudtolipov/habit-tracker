import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/ui/tabs.tsx";
import CustomHabitForm from "@/features/habits/components/HabitCard/newHabit/customHabit/CustomHabitForm.tsx";
import {useState} from "react";
import PredefinedHabitsForm
  from "@/features/habits/components/HabitCard/newHabit/predefinedHabit/PredefinedHabitsForm.tsx";

interface NewHabitTabsProps {
  onCloseDialog: () => void;
}

const NewHabitTabs = ({ onCloseDialog }: NewHabitTabsProps) => {
  const [selectedTab, setSelectedTab] = useState("predefined");

  return (
    <div className="flex flex-col gap-4">
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
          <CustomHabitForm onCloseDialog={onCloseDialog} />
        </TabsContent>

        <TabsContent
          className="text-sm text-muted-foreground"
          value="predefined"
        >
          <PredefinedHabitsForm
            onCloseDialog={onCloseDialog}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewHabitTabs;
