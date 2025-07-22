import type {FormEvent} from "react";
import {useDispatch} from "react-redux";
import {MAX_DESCRIPTION_LENGTH, MAX_NAME_LENGTH,} from "@/features/habits/constants.ts";
import {createNewHabit, editHabit} from "@/features/habits/slice.ts";

export const useSubmitEditHabitForm = (
  mode: "create" | "edit",
  onSuccess: () => void,
  habitId?: string,
) => {
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

    if (mode === "edit" && habitId) {
      dispatch(
        editHabit({
          id: habitId,
          name: data.name,
          description: data.description,
        }),
      );
    }

    if (mode === "create") {
      dispatch(
        createNewHabit({
          ...data,
          type: "custom",
        }),
      );
    }

    onSuccess();
  };

  return { handleSubmit };
};
