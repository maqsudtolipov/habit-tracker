import HabitFormFields from "@/shared/components/HabitFormFields.tsx";
import {useSubmitHabitForm} from "@/features/habits/hooks/useSubmitHabitForm.ts";

interface CustomHabitFormProps {
  onCloseDialog: () => void;
}

const CustomHabitForm = ({ onCloseDialog }: CustomHabitFormProps) => {
  const { handleSubmit } = useSubmitHabitForm("createNew", onCloseDialog);

  return <HabitFormFields handleSubmit={handleSubmit} />;
};

export default CustomHabitForm;
