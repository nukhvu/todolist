import { noDoTask } from "../../../../data.js";

export function NoDoTask(id) {
  const noDoElement = document.createElement("button");
  noDoElement.append("➖");

  noDoElement.addEventListener("click", () => {
    noDoTask(id);
  });

  return noDoElement;
}
