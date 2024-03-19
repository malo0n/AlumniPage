export function tagsFormat (tags){
  tags = tags.split(", ");
  const tagsFormat = tags.map((el)=>{
    switch (el) {
      case "Event-Managment":
        return "EventManager";
      case "Project-Management":
        return "ProjectManager"
      case "Product-Management":
        return "ProductManager";
      case "SMM":
        return "SMM";
      case "Маркетинг":
        return "Marketing";
      case "Руководство":
        return "C-level";
      case "Web-Разработка":
        return "Web";
      case "Дизайн":
        return "Design";
      case "iOS Development":
        return "Mobile";
    }
  })
  return(
    tagsFormat
  )
}