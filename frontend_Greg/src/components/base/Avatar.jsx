import avatarDefault from "../../assets/icons/defaultAvatar.svg";

export function Avatar({avatar}){
  const src = avatar?avatar:avatarDefault;
  return(
    <img className="avatar" src={src} alt="avatar" />
  )
}