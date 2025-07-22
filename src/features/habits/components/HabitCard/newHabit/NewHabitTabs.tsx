import CustomHabitForm from "@/features/habits/components/HabitCard/newHabit/customHabit/CustomHabitForm.tsx";
import PredefinedHabitsForm
  from "@/features/habits/components/HabitCard/newHabit/predefinedHabit/PredefinedHabitsForm.tsx";
import TabsWrapper from "@/shared/ui/TabsWrapper.tsx";

interface NewHabitTabsProps {
  onCloseDialog: () => void;
}

const NewHabitTabs = ({ onCloseDialog }: NewHabitTabsProps) => {
  const tabItems = [
    {
      label: "Predefined",
      value: "predefined",
      content: <PredefinedHabitsForm onCloseDialog={onCloseDialog} />,
    },
    {
      label: "Custom",
      value: "custom",
      content: <CustomHabitForm onCloseDialog={onCloseDialog} />,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <TabsWrapper defaultValue="predefined" items={tabItems} />
    </div>
  );
};

export default NewHabitTabs;
