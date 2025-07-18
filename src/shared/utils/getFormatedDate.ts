import {format} from "date-fns";

const getFormatedDate = (date: Date) => {
  return format(date, "yyyy-MM-dd");
};

export default getFormatedDate;
