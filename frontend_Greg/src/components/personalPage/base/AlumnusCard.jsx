import { Avatar } from "../../base/Avatar";
import { Tags } from "../../base/Tags";
import {tagsFormat} from "../../../helpers/tagsFormat";
import { graduationDateFormat } from "../../../helpers/graduationDateFormat";


export function AlumnusCard({data}){
  const {department, name, photo, date_of_birth, work, faculty} = data;
  return(
    <div className="alumnusCard">
      <div className="alumnusCard__top"> 
        <Avatar avatar={photo}></Avatar>
        <div className="alumnusCard__top_info">
          <div className="alumnusCard__top_info__tags"><Tags className="tag_profile" tags={tagsFormat(department)}></Tags></div>
          <span className="alumnusCard__top_info__name">{name}</span>
          <span className="alumnusCard__top_info__date">{graduationDateFormat(data)}</span>
        </div>
      </div>
      <div className="alumnusCard__bottom">
        <span className="alumnusCard__bottom_info">Дата рождения<span className="data-text">{date_of_birth}</span></span>
        <span className="alumnusCard__bottom_info">Место работы<span className="data-text">{work}</span></span>
        <span className="alumnusCard__bottom_info">Образование<span className="data-text">{faculty}</span></span>
      </div>
    </div>
  )
}