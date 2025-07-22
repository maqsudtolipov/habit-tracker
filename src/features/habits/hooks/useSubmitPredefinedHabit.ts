import {useDispatch} from "react-redux";
import {MAX_DESCRIPTION_LENGTH, MAX_NAME_LENGTH,} from "@/features/habits/constants.ts";
import {createNewHabit} from "@/features/habits/slice.ts";

export const useSubmitPredefinedHabit = (onSuccess: () => void) => {
  const dispatch = useDispatch();

  const handleSubmit = (name: string, description: string) => {
    if (
      !name ||
      name.length < 3 ||
      name.length > MAX_NAME_LENGTH ||
      description.length > MAX_DESCRIPTION_LENGTH
    ) {
      return;
    }

    dispatch(createNewHabit({ name, description, type: "predefined" }));
    onSuccess();
  };

  return { handleSubmit };
};
