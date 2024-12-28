import { data, doTask } from "../../../../data.js";

export function DoTask() {
  const doElement = document.createElement("button");
  doElement.append("➕");

  doElement.addEventListener("click", () => {
    doTask(data.todolist);
  });

  return doElement;
}
