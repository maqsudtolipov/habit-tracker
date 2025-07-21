import type {FormEvent} from "react";
import {useDispatch} from "react-redux";
import {MAX_DESCRIPTION_LENGTH, MAX_NAME_LENGTH,} from "@/features/habits/constants.ts";
import {editHabit} from "@/features/habits/slice.ts";
import type {Habit} from "@/features/habits/types.ts";

export const useSubmitEditHabitForm = (habit: Habit, onSuccess: () => void) => {
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
      editHabit({
        id: habit.id,
        name: data.name,
        description: data.description,
      }),
    );
    onSuccess();
  };

  return {handleSubmit};
};
