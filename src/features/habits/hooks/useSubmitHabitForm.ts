import {useDispatch} from "react-redux";
import {createNewHabit, editHabit} from "@/features/habits/slice.ts";

export const useSubmitHabitForm = (
  mode: "createNew" | "edit",
  onSuccess: () => void,
  habitId?: string,
) => {
  const dispatch = useDispatch();

  // Assumed form data comes validated
  const handleSubmit = ({
    name,
    description,
  }: {
    name: string;
    description: string;
  }) => {
    if (mode === "edit" && habitId) {
      dispatch(
        editHabit({
          id: habitId,
          name,
          description,
        }),
      );
    }

    if (mode === "createNew") {
      dispatch(
        createNewHabit({
          name,
          description,
          type: "custom",
        }),
      );
    }

    onSuccess();
  };

  return { handleSubmit };
};
