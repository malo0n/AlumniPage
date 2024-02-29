import projectDefault from "../../../assets/icons/projectDefault.svg";
import forwardArrow from "../../../assets/icons/forwardArrow.svg";
import {ButtonForward} from "../../buttons/Buttons";
import { projectStatus } from "../../../helpers/projectsData";
//!underTest↓↓↓
export function ProjectCard({data}){
  return(
    <div className="projectCard">
      <div className="projectCard__info">
        <img className="projectCard__icon" src={projectDefault} alt="icon"/>
        <div className="projectCard__titles">
          <span className={`projectCard__titles_status ${projectStatus(data.status)}`}>{data.status}</span>
          <span className="projectCard__titles_name">{data.projectName}</span>
          <span className="projectCard__titles_role">{data.role}</span>
        </div>
      </div>
      <ButtonForward text={"Перейти к проекту"} src={forwardArrow}></ButtonForward>
    </div>
  )
}