import { openTaskDialog } from "../../data.js";

export function ButtonsPanel() {
  const container = document.createElement("div");
  const addButtonElement = document.createElement("button");
  addButtonElement.append("add new task");

  addButtonElement.addEventListener("click", openTaskDialog);

  container.append(addButtonElement);
  return container;
}
