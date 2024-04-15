import { ProfileData } from "../../types/types";

export function allProfilesData(data: ProfileData): ProfileData {
  const {
    id,
    name,
    photo,
    department,
    year_of_entry,
    year_of_graduation,
  }: ProfileData = data;
  return {
    id,
    name,
    photo,
    department,
    year_of_entry,
    year_of_graduation,
  };
}
