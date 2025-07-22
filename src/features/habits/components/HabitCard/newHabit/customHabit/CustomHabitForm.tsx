import HabitFormFields from "@/shared/components/HabitFormFields.tsx";

interface CustomHabitFormProps {
  onCloseDialog: () => void;
}

const CustomHabitForm = ({ onCloseDialog }: CustomHabitFormProps) => {
  return <HabitFormFields type="createNew" onClose={onCloseDialog} />;
};

export default CustomHabitForm;
