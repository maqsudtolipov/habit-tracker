import {format} from "date-fns";

/**
 * Formats given date into the `yyyy-MM--dd` format
 *
 * @param date a Date object or a date string
 */
const getFormattedDate = (date: Date | string) => {
  return format(date, "yyyy-MM-dd");
};

export default getFormattedDate;
