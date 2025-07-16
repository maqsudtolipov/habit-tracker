import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs.tsx";
import CustomHabitForm from "@/features/habits/components/newHabit/CustomHabitForm.tsx";

const NewHabitTabs = () => {
  return (
    <Tabs defaultValue="predefined" className="w-full">
      <TabsList>
        <TabsTrigger value="predefined">Predefined</TabsTrigger>
        <TabsTrigger value="custom">Custom</TabsTrigger>
      </TabsList>
      <TabsContent className="flex flex-col gap-4" value="custom">
        <CustomHabitForm />
      </TabsContent>
      <TabsContent className="text-sm text-muted-foreground" value="predefined">
        <p className="text-sm text-muted-foreground">
          Choose one of the predefined habits here.
        </p>
      </TabsContent>
    </Tabs>
  );
};

export default NewHabitTabs;
