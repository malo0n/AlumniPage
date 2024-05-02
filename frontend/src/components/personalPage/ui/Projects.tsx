import { ProjectCard } from "./ProjectCard";
import { projectsDataFormat } from "../../../helpers/data/projectsData";//!underTest↓↓↓

type Props = { status: string; projectName: string; role: string }[]
export function Projects({props}: {props : Props}) {   
  return props.map((el: { status: string; projectName: string; role: string }, index) => {
    return <ProjectCard key={index} {...projectsDataFormat(el)}></ProjectCard>;
  });
}
