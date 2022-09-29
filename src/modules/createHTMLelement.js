const createHTMLElement = (newElement, className, id, inHTML, parent) => {
  const element = document.createElement(`${newElement}`);
  element.className = `${className}`;
  element.id = `${id}`;
  element.innerHTML = `${inHTML}`;
  parent.appendChild(element);
  return element;
};

const createInputElement = (newElement, className, id, type, name, value, parent) => {
  const element = document.createElement(`${newElement}`);
  element.className = `${className}`;
  element.id = `${id}`;
  element.type = `${type}`;
  element.name = `${name}`;
  element.value = `${value}`;
  parent.appendChild(element);
  return element;
};

const tasksContainer = document.querySelector('.todolist-placeholder');

const createTaskInputItem = () => {
  const taskItem = createHTMLElement('li', 'task-item', 'task-item', '', tasksContainer);
  const taskInput = createInputElement('input', 'new-task text-inp', 'new-task', 'text', 'new-task', '', taskItem);
  taskInput.placeholder = 'Add to your list';
  createHTMLElement('button', 'add-task', 'add-task', '<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', taskItem);
};

const createClearBtn = () => {
  const clearButton = createHTMLElement('li', 'task-item', 'task-item', '', tasksContainer);
  createHTMLElement('button', 'clear-completed', 'clear-completed', 'Clear all completed', clearButton);
};

export {
  createHTMLElement, createInputElement, createTaskInputItem, createClearBtn,
};