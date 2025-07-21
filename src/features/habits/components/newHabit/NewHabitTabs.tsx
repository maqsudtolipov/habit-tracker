import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/shared/ui/tabs.tsx";
import CustomHabitForm from "@/features/habits/components/newHabit/CustomHabitForm.tsx";
import {useState} from "react";
import PredefinedHabitsList from "@/features/habits/components/newHabit/PredefinedHabitsList.tsx";

interface NewHabitTabsProps {
  onCloseDialog: () => void;
}

const NewHabitTabs = ({ onCloseDialog }: NewHabitTabsProps) => {
  const [selectedTab, setSelectedTab] = useState("predefined");
  const [selectedHabitId, setSelectedHabitId] = useState<null | string>(null);

  return (
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
      <TabsContent className="text-sm text-muted-foreground" value="predefined">
        <PredefinedHabitsList
          selectedHabitId={selectedHabitId}
          onSelectHabit={setSelectedHabitId}
          onCloseDialog={onCloseDialog}
        />
      </TabsContent>
    </Tabs>
  );
};

export default NewHabitTabs;
