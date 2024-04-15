import avatarDefault from "../../assets/icons/defaultAvatar.svg";
import { AvatarProps } from "../../types/types";
export function Avatar({ photo }: AvatarProps) {
  const src: string = photo ? photo : avatarDefault;
  return (
    <img className=" size-[72px] xs:size-[152px]" src={src} alt="avatar" />
  );
}
