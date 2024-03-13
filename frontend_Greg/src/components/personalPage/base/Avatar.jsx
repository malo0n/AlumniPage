import avatarDefault from "../../../assets/icons/defaultAvatar.svg";

export function Avatar({avatar}){
  const src = avatar?avatar:avatarDefault;
  return(
    <img className="card__top__avatar" src={src} alt="avatar" />
  )
}