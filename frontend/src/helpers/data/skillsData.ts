import { ProfileData } from "@/types/types";
import { profileData } from "./profileData";

export function skillsData(data: ProfileData): string {
  return data.skills || "";
}
