import HabitFormFields from "@/shared/components/HabitFormFields.tsx";
import {useSubmitEditHabitForm} from "@/features/habits/hooks/useSubmitEditHabitForm.ts";

interface CustomHabitFormProps {
  onCloseDialog: () => void;
}

const CustomHabitForm = ({ onCloseDialog }: CustomHabitFormProps) => {
  const { handleSubmit } = useSubmitEditHabitForm("createNew", onCloseDialog);

  return <HabitFormFields handleSubmit={handleSubmit} />;
};

export default CustomHabitForm;
