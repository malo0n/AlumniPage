import { ProjectCard } from "./ProjectCard"
import { projectsDataFormat } from "../../../helpers/projectsData";
//!underTest↓↓↓
export function Projects({data}){
  return data.map((el)=>{
    return(
      <ProjectCard key={data.indexOf(el)} data={projectsDataFormat(el)}></ProjectCard>
    )
  })
  


}