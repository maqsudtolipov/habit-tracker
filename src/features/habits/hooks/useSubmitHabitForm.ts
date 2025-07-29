import {createNewHabit, editHabit} from "@/features/habits/slice.ts";
import {toast} from "sonner";
import {useAppDispatch} from "@/app/hooks.ts";

export const useSubmitHabitForm = (
  mode: "createNew" | "edit",
  onSuccess: () => void,
  habitId?: string,
) => {
  const dispatch = useAppDispatch();

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
      toast.success(`Habit is updated`);
    }

    if (mode === "createNew") {
      dispatch(
        createNewHabit({
          name,
          description,
          type: "custom",
        }),
      );
      toast.success(`New habit is created`);
    }

    onSuccess();
  };

  return { handleSubmit };
};
