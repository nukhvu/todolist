export const data = {
  todolist: {
    id: createUniqId,
    title: "to lern",
    tasks: [
      {
        id: createUniqId,
        title: "to lern",
      },
      {
        id: createUniqId,
        title: "to lern css",
      },
      {
        id: createUniqId,
        title: "to lern css",
      },
    ],

    isDoing: false,

    addNewTaskDialog: {
      isOpen: false,
      error: null,
    },
  },
};

export function doTask(i) {
  if (i.isDoing !== true) {
    const fg = i.tasks.title;
    document.body.innerHTML = fg.blink();
    // console.log("yes");
  }

  notifySubscribe();
}

export function noDoTask(i) {
  console.log(i);
  // notifySubscribe();
}

function setError(error) {
  data.todolist.addNewTaskDialog.error = error;
  notifySubscribe();
}

//function for open dialog
export function openTaskDialog() {
  data.todolist.addNewTaskDialog.isOpen = true;
  notifySubscribe();
}
//function for close dialog
export function closeTaskDialog() {
  data.todolist.addNewTaskDialog.isOpen = false;
  notifySubscribe();
}

let notifySubscribe = null;
export function subscribe(subscriber) {
  notifySubscribe = subscriber;
}

//function for create uniq id
function createUniqId() {
  return Math.floor(Math.random() * 10000);
}
//fun for create new task
export function createTask(newTitle) {
  if (newTitle.trim().length > 0) {
    const newTask = {
      id: createUniqId(),
      title: newTitle,
    };
    data.todolist.tasks.push(newTask);
    notifySubscribe();

    return true;
  } else {
    setError("empty");
    // notifySubscribe();

    return false;
  }
  // if (newTitle.trim().length < 0) {
  //   notifySubscribe();
  //   return true;
  // }
}

export function deleteTask(id) {
  data.todolist.tasks = data.todolist.tasks.filter((t) => t.id !== id);
  notifySubscribe();
  // console.log("del");
}
