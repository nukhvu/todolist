import { Task } from "./Task/Task.js";

export function TasksList(tasks) {
  const container = document.createElement("ul");

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const taskElement = Task(task);
    container.append(taskElement);
  }
  return container;
}
