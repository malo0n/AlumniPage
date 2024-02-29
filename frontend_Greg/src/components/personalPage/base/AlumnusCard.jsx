import { Avatar } from "./Avatar";
import { Tags } from "./Tags";
import {tagsFormat} from "../../../helpers/tagsFormat";
import { graduationDateFormat } from "../../../helpers/graduationDateFormat";


export function AlumnusCard({data}){
  return(
    <div className="card">
      <div className="card__top"> 
        <Avatar avatar={data.photo}></Avatar>
        <div className="card__top_info">
          <div className="card__top_info__tags"><Tags tags={tagsFormat(data.department)}></Tags></div>
          <span className="card__top_info__name">{data.name}</span>
          <span className="card__top_info__date">{graduationDateFormat(data)}</span>
        </div>
      </div>
      <div className="card__bottom">
        <span className="card__bottom_info">Дата рождения<span className="data-text">{data.date_of_birth}</span></span>
        <span className="card__bottom_info">Место работы<span className="data-text">{data.work}</span></span>
        <span className="card__bottom_info">Образование<span className="data-text">{data.faculty}</span></span>
      </div>
    </div>
  )
}