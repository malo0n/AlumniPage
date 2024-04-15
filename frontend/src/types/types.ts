export interface ProfileData {
  id: number;
  photo: string | null;
  name: string;
  department: string;
  year_of_entry: number | null;
  year_of_graduation: number | null;
  date_of_birth?: string;
  work?: string;
  university?: string;
  faculty?: string;
  skills?: string;
}

export type AllProfilesData = ProfileData[];

export interface GraduationData {
  year_of_entry: number | null;
  year_of_graduation: number | null;
}

export type Tag =
  | "EventManager"
  | "ProjectManager"
  | "ProductManager"
  | "SMM"
  | "Marketing"
  | "C-level"
  | "Web"
  | "Design"
  | "Mobile"
  | undefined;
export interface TagsProps {
  variant: "allProfiles" | "profile";
  tags: Tag[];
}
export interface AvatarProps {
  photo: string | null;
}

export interface buttonProps {
  variant?: "usual" | "registration";
  text: string;
  src: string;
  href: string;
}
