
export function projectsData (data){
  const projectsData = {
    "now_projects": data.now_projects,
    "finish_projects": data.finish_projects,
  }
  return (projectsData);
}
//!underTest↓↓↓

export function projectsDataFormat(data){
  const formatData = {
    "status": "",
    "projectName": data.projectName,
    "role": data.role,
  };
  if (data.status === "active") formatData.status = "В процессе";
  else if (data.status === "finish") formatData.status = "Завершен"; 
  return formatData;
}

export function projectStatus(data){
  let status;
  if(data === "В процессе") {status = "activeProjectText"}
  else if(data) {status = "finishedProjectText"}
  return status;
}