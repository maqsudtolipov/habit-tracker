import {useDispatch} from "react-redux";
import type {FormEvent} from "react";
import {createNewHabit} from "@/features/habits/slice.ts";
import HabitFormFields from "@/shared/components/HabitFormFields.tsx";
import {parseAndValidateHabitForm} from "@/features/utils.ts";

interface CustomHabitFormProps {
  onCloseDialog: () => void;
}

const CustomHabitForm = ({ onCloseDialog }: CustomHabitFormProps) => {
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = parseAndValidateHabitForm(e.currentTarget);
    if (!data) return;

    dispatch(
      createNewHabit({
        ...data,
        type: "custom",
      }),
    );

    onCloseDialog();
  };

  return <HabitFormFields handleSubmit={handleSubmit} />;
};

export default CustomHabitForm;
