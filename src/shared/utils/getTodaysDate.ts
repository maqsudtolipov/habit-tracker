import {format} from "date-fns";

const getTodaysDate = (): string => {
  return format(new Date(), "yyyy-MM-dd");
};

export default getTodaysDate;
