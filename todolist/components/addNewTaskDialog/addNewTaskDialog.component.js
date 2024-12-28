import { createTask, closeTaskDialog, data } from "../../data.js";

export function AddNewTaskDialog() {
  const container = document.createElement("dialog");

  const inputElement = document.createElement("input");
  const saveButtonElement = document.createElement("button");
  saveButtonElement.append("save");
  //save === 'enter'
  inputElement.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      saveButtonElement.click();
    }
  });

  saveButtonElement.addEventListener("click", () => {
    const createResult = createTask(inputElement.value);
    // if (createResult) {
    //   closeTaskDialog();
    // }
  });

  if (data.todolist.addNewTaskDialog.error !== null) {
    inputElement.classList.add("error");
    const errorElement = document.createElement("span");
    errorElement.append(data.todolist.addNewTaskDialog.error);
  }
  //cancel button sittings
  const cancelButtonElement = document.createElement("button");
  cancelButtonElement.append("cancel");
  cancelButtonElement.addEventListener("click", () => {
    closeTaskDialog();
  });

  // container.addEventListener("keydown", function (event) {
  //   if (event.key === "Escape") {
  //     event.preventDefault();
  //     closeTaskDialog;
  //   }
  // });
  //open dialog
  if (data.todolist.addNewTaskDialog.isOpen) {
    container.open = true;
  }

  container.append(inputElement);
  if (data.todolist.addNewTaskDialog.error !== null) {
    inputElement.classList.add("error");
    const errorElement = document.createElement("span");
    errorElement.append(data.todolist.addNewTaskDialog.error);
    container.append(errorElement);
  }

  container.append(saveButtonElement);
  container.append(cancelButtonElement);

  return container;
}
