import CustomHabitForm from "@/features/habits/components/HabitCard/newHabit/customHabit/CustomHabitForm.tsx";
import PredefinedHabitsForm
  from "@/features/habits/components/HabitCard/newHabit/predefinedHabit/PredefinedHabitsForm.tsx";
import TabsWrapper from "@/shared/components/TabsWrapper.tsx";

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
    <TabsWrapper
      className="w-full gap-4"
      defaultValue="predefined"
      items={tabItems}
    />
  );
};

export default NewHabitTabs;
