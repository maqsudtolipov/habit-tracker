import {MAX_DESCRIPTION_LENGTH, MAX_NAME_LENGTH,} from "@/features/habits/constants.ts";

export const parseAndValidateHabitForm = (form: HTMLFormElement) => {
  const formData = new FormData(form);
  const data = {
    name: formData.get("name")?.toString().trim() ?? "",
    description: formData.get("description")?.toString().trim() ?? "",
  };

  const isValid =
    !data.name ||
    data.name.length < 3 ||
    data.name.length > MAX_NAME_LENGTH ||
    data.description.length > MAX_DESCRIPTION_LENGTH;

  return isValid ? data : null;
};
