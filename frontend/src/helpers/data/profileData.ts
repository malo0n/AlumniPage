import { ProfileData } from "../../types/types";
export function profileData(data: ProfileData): ProfileData {
  let {
    id,
    name,
    photo,
    department,
    year_of_entry,
    year_of_graduation,
    date_of_birth,
    work,
    university,
    faculty,
  }: ProfileData = data;
  date_of_birth = date_of_birth?.split("-").reverse().join(".");
  return {
    id,
    name,
    photo,
    department,
    year_of_entry,
    year_of_graduation,
    date_of_birth,
    work,
    university,
    faculty,
  };
}
