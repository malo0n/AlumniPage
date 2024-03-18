export function graduationDateFormat(data){
  let date_of_graduation;
  if (data.year_of_graduation == "Не указано") {
    date_of_graduation = `В организации с ${data.year_of_entry} года`;
  }
  else{
    date_of_graduation = `Был(а) в организации с ${data.year_of_entry} по ${data.year_of_graduation} год`;
  }
  return date_of_graduation;
}