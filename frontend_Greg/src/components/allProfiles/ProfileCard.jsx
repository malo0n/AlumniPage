import { Avatar } from "../base/Avatar";
import { Tags } from "../base/Tags";
import {tagsFormat} from "../../helpers/tagsFormat";
import { graduationDateFormat } from "../../helpers/graduationDateFormat";
import { ButtonForward } from "../buttons/Buttons";
import aboutArrow from "../../assets/icons/aboutArrow.svg";


export function ProfileCard({data, href}){
  const { photo, name, department } = data;
  return(
    <div className="allProfilesCard"> 
      <Avatar avatar={photo}></Avatar>
      <div className="allProfilesCard_info">
          <div className="allProfilesCard_info__tags"><Tags className="tag_allProfiles" tags={tagsFormat(department)}></Tags></div>
          <span className="allProfilesCard_info__name">{name}</span>
          <span className="allProfilesCard_info__date">{graduationDateFormat(data)}</span>
          <ButtonForward text="Узнать подробнее" href={href} src={aboutArrow}></ButtonForward>
      </div>
    </div>
  )
}