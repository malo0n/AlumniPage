
export function profileData(data){
  const profileData = {
    "id": data.id,
    "photo": data.photo,
    "name": data.name,
    "department": data.department,
    "year_of_entry": data.year_of_entry,
    "year_of_graduation": data.year_of_graduation,
    "date_of_birth": data.date_of_birth,
    "work": data.work,
    "university": data.university,
    "faculty": data.faculty,
  }
  for (const key in profileData) {
    if (!profileData[key] && key != "photo") {
      profileData[key] = "Не указано";
    }
  }
  profileData.date_of_birth = profileData.date_of_birth.split("-").reverse().join('.')
  return(profileData);

}