import { initTodoListHandlers } from './list/todoList';
import { renderTasks } from './list/renderer';
import { getTasksList } from './list/tasksGateway';
import { setItem } from './list/storage';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks();
  });

  initTodoListHandlers();
});

const onStarageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStarageChange);

// 1. get data from server
// 2. save data to front-end storage
