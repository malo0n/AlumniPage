import { ProfileData } from "@/types/types";

export function projectsData(data: {
  now_projects: string;
  finish_projects: string;
}) {
  const projectsData = {
    now_projects: data.now_projects,
    finish_projects: data.finish_projects,
  };
  return projectsData;
}
//!underTest↓↓↓

export function projectsDataFormat(data: {
  status: string;
  projectName: string;
  role: string;
}) {
  const formatData = {
    status: "",
    projectName: data.projectName,
    role: data.role,
  };
  if (data.status === "active") formatData.status = "В процессе";
  else if (data.status === "finish") formatData.status = "Завершен";
  return formatData;
}

export function projectStatus(status: string) {
  if (status === "В процессе") {
    status = "activeProjectText";
  } else if (status) {
    status = "finishedProjectText";
  }
  return status;
}
