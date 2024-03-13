import { ProjectCard } from "./ProjectCard"
import { projectsDataFormat } from "../../../helpers/projectsData";
//!underTest↓↓↓
export function Projects({data}){
  return data.map((el, index)=>{
    return(
      <ProjectCard key={index} data={projectsDataFormat(el)}></ProjectCard>
    )
  })
  


}