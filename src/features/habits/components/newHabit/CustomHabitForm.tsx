import {useDispatch} from "react-redux";
import type {FormEvent} from "react";
import {MAX_DESCRIPTION_LENGTH, MAX_NAME_LENGTH,} from "@/features/habits/constants.ts";
import {createNewHabit} from "@/features/habits/slice.ts";
import HabitFormFields from "@/shared/ui/HabitFormFields.tsx";

interface CustomHabitFormProps {
  onCloseDialog: () => void;
}

const CustomHabitForm = ({ onCloseDialog }: CustomHabitFormProps) => {
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name")?.toString().trim() ?? "",
      description: formData.get("description")?.toString().trim() ?? "",
    };

    // Validate
    if (
      !data.name ||
      data.name.length < 3 ||
      data.name.length > MAX_NAME_LENGTH ||
      data.description.length > MAX_DESCRIPTION_LENGTH
    ) {
      return;
    }

    dispatch(
      createNewHabit({
        name: `${data.name} ${Math.floor(Math.random() * 100)}`,
        description: data.description,
        type: "custom",
      }),
    );

    onCloseDialog();
  };

  return <HabitFormFields handleSubmit={handleSubmit} />;
};

export default CustomHabitForm;
