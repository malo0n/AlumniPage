import avatarDefault from "../../assets/icons/defaultAvatar.svg";

type Props = {
  photo: string | null;
}
export function Avatar( props:Props) {
  const {photo} = props
  const src = photo ? photo : avatarDefault;  
  return <img className=' size-[72px] xs:size-[152px]' src={src} alt='avatar' />;
}
