import { ProjectCard } from "./ProjectCard";
import { projectsDataFormat } from "../../../helpers/data/projectsData";
import { ProfileData } from "@/types/types";
//!underTest↓↓↓
export function Projects({
  data,
}: {
  data: { status: string; projectName: string; role: string }[];
}) {
  return data.map(
    (el: { status: string; projectName: string; role: string }, index) => {
      return (
        <ProjectCard key={index} data={projectsDataFormat(el)}></ProjectCard>
      );
    }
  );
}
