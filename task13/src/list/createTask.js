import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { createTask, getTasksList } from "./tasksGateway.js";

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");
  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = "";

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });

  // setItem('tasksList', newTasksList);

  // renderTasks();
};

// 1. prepare data
// 2. write data to database
// 3. read new data from server
// 4. save new data to front-end storage
// 5. update UI based on new data
