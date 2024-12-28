import { DeleteButton } from "./DeleteButton/DeleteButton.js";
import { NoDoTask } from "./NoDoTask/NodoTask.js";
import { DoTask } from "./DoTask/DoTask.js";

export function Task(task) {
  const container = document.createElement("li");
  container.append(task.title);

  const deleteButtonElement = DeleteButton(task.id);
  container.append(deleteButtonElement);

  const noDoElement = NoDoTask(task);
  container.append(noDoElement);

  const doElement = DoTask(task);
  container.append(doElement);

  return container;
}
