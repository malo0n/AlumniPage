import { Tag } from "../../types/types";
export function tagsFormat(tags: string): Tag[] {
  let tagsFormat: string[] = tags.split(", ");
  let Tags: Tag[] = tagsFormat.map((el) => {
    switch (el) {
      case "Event-Managment":
        return "EventManager";
      case "Project-Management":
        return "ProjectManager";
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
  });
  return Tags;
}
