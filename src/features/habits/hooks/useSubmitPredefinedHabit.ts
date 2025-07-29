import {MAX_DESCRIPTION_LENGTH, MAX_NAME_LENGTH,} from "@/features/habits/constants.ts";
import {createNewHabit} from "@/features/habits/slice.ts";
import {toast} from "sonner";
import {useAppDispatch} from "@/app/hooks.ts";

export const useSubmitPredefinedHabit = (onSuccess: () => void) => {
  const dispatch = useAppDispatch();

  const handleSubmit = (id: string, name: string, description: string) => {
    if (
      !name ||
      name.length < 3 ||
      name.length > MAX_NAME_LENGTH ||
      description.length > MAX_DESCRIPTION_LENGTH
    ) {
      return;
    }

    dispatch(createNewHabit({ id, name, description, type: "predefined" }));
    toast.success(`New habit is created`);

    onSuccess();
  };

  return { handleSubmit };
};
