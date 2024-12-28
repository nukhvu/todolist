import { data, subscribe } from "./data.js";
import { Todolist } from "./components/todolist.component.js";

// const todolist = Todolist(data.todolist);

subscribe(refreshUI);

function refreshUI() {
  const todolistElement = Todolist(data.todolist);

  const rootElement = document.getElementById("root");
  rootElement.innerHTML = "";

  rootElement.append(todolistElement);
}

refreshUI();
