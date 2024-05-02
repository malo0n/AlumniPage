export type ProfileData = {
  id: number;
  photo: string | null;
  name: string;
  department: string;
  year_of_entry?: number;
  year_of_graduation?: number;
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
export interface buttonProps {
  variant?: "usual" | "registration";
  text: string;
  src: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: string;
}

export interface RegistrationForm {
  name: string;
  surname: string;
  department: Tag;
  year_of_entry: number;
  year_of_graduation: number;
  email: string;
  triggerValidation: () => void;
}

export interface InputProps {
  placeholder: string;
  name: string;
  value?: string;
  values?: string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
