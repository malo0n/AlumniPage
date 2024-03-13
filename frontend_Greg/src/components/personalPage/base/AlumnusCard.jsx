import { Avatar } from "./Avatar";
import { Tags } from "./Tags";
import {tagsFormat} from "../../../helpers/tagsFormat";
import { graduationDateFormat } from "../../../helpers/graduationDateFormat";


export function AlumnusCard({data}){
  const {department, name, photo, date_of_birth, work, faculty} = data;
  return(
    <div className="card">
      <div className="card__top"> 
        <Avatar avatar={photo}></Avatar>
        <div className="card__top_info">
          <div className="card__top_info__tags"><Tags tags={tagsFormat(department)}></Tags></div>
          <span className="card__top_info__name">{name}</span>
          <span className="card__top_info__date">{graduationDateFormat(data)}</span>
        </div>
      </div>
      <div className="card__bottom">
        <span className="card__bottom_info">Дата рождения<span className="data-text">{date_of_birth}</span></span>
        <span className="card__bottom_info">Место работы<span className="data-text">{work}</span></span>
        <span className="card__bottom_info">Образование<span className="data-text">{faculty}</span></span>
      </div>
    </div>
  )
}