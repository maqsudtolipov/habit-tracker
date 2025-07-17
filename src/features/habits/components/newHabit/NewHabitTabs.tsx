import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs.tsx";
import CustomHabitForm from "@/features/habits/components/newHabit/CustomHabitForm.tsx";
import {useState} from "react";
import PredefinedHabitsList from "@/features/habits/components/newHabit/PredefinedHabitsList.tsx";

const NewHabitTabs = () => {
  const [selectedTab, setSelectedTab] = useState("custom");

  return (
    <Tabs className="w-full" value={selectedTab} onValueChange={setSelectedTab}>
      <TabsList>
        <TabsTrigger value="predefined">Predefined</TabsTrigger>
        <TabsTrigger value="custom">Custom</TabsTrigger>
      </TabsList>
      <TabsContent className="flex flex-col gap-4" value="custom">
        <CustomHabitForm selectedTab={selectedTab} />
      </TabsContent>
      <TabsContent className="text-sm text-muted-foreground" value="predefined">
        <PredefinedHabitsList />
      </TabsContent>
    </Tabs>
  );
};

export default NewHabitTabs;
