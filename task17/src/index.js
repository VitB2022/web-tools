import { initTodoListHandlers } from "./list/todoList.js";
import { renderTasks } from "./list/renderer.js";
import { getTasksList } from "./list/tasksGateway.js";
import { setItem } from "./list/storage.js";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((tasksList) => {
    setItem("tasksList", tasksList);
    renderTasks();
  });

  initTodoListHandlers();
});

const onStarageChange = (e) => {
  if (e.key === "tasksList") {
    renderTasks();
  }
};
window.addEventListener("storage", onStarageChange);

// 1. get data from server
// 2. save data to front-end storage
