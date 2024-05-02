export function graduationDateFormat(year_of_entry: number | undefined, year_of_graduation: number | undefined): string {
  let date_of_graduation;
  if (year_of_graduation === null) {
    date_of_graduation = `В организации с ${year_of_entry} года`;
  } else {
    date_of_graduation = `Был(а) в организации с ${year_of_entry} по ${year_of_graduation} год`;
  }
  return date_of_graduation;
}
