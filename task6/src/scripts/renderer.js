import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }

  if (a.done) {
    return new Date(b.finishDate) - new Date(a.finishDate);
  }

  return new Date(b.createDate) - new Date(a.createDate);
};

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  listItemElem.setAttribute('data-id', id);

  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  const checkboxElem = createCheckbox({ done, id });

  const textElem = document.createElement('span');
  textElem.classList.add('list__item-text');
  textElem.textContent = text;

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list__item-delete-btn');
  deleteBtnElem.setAttribute('data-id', id);
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);

  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];

  listElem.innerHTML = '';
  const tasksElems = tasksList.sort(compareTasks).map(createListItem);

  listElem.append(...tasksElems);
};
