import { GraduationData } from "../../types/types";
export function graduationDateFormat(data: GraduationData): string {
  let date_of_graduation;
  if (data.year_of_graduation === null) {
    date_of_graduation = `В организации с ${data.year_of_entry} года`;
  } else {
    date_of_graduation = `Был(а) в организации с ${data.year_of_entry} по ${data.year_of_graduation} год`;
  }
  return date_of_graduation;
}
