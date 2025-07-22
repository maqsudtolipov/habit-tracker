import HabitForm from "@/shared/components/HabitForm.tsx";

interface CustomHabitFormProps {
  onCloseDialog: () => void;
}

const CustomHabitForm = ({ onCloseDialog }: CustomHabitFormProps) => {
  return <HabitForm type="createNew" onClose={onCloseDialog} />;
};

export default CustomHabitForm;
