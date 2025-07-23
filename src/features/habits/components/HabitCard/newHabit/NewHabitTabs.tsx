import PredefinedHabitsForm from "@/features/habits/components/HabitCard/predefinedHabit/PredefinedHabitsForm.tsx";
import TabsWrapper from "@/shared/components/TabsWrapper.tsx";
import HabitForm from "@/shared/components/HabitForm.tsx";

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
      content: <HabitForm type="createNew" onClose={onCloseDialog} />,
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
