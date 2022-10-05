const createHTMLElement = (...args) => {
  const element = document.createElement(`${args[0]}`);
  element.className = `${args[1]}`;
  element.id = `${args[2]}`;
  element.innerHTML = `${args[3]}`;
  element.type = `${args[5]}`;
  element.name = `${args[6]}`;
  element.value = `${args[7]}`;
  args[4].appendChild(element);
  return element;
};

const tasksContainer = document.querySelector('.todolist-placeholder');

const createTaskInputItem = () => {
  const taskItem = createHTMLElement('li', 'task-item', 'task-item', '', tasksContainer);
  const taskInput = createHTMLElement('input', 'new-task text-inp', 'new-task', '', taskItem, 'text', 'new-task', '');
  taskInput.placeholder = 'Add to your list';
  createHTMLElement('button', 'add-task', 'add-task', '<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', taskItem);
};

const createClearBtn = () => {
  const clearButton = createHTMLElement('li', 'task-item', 'task-item', '', tasksContainer);
  createHTMLElement('button', 'clear-completed', 'clear-completed', 'Clear all completed', clearButton);
};

const selectElement = (element) => document.querySelector(element);

export {
  selectElement, createHTMLElement, createTaskInputItem, createClearBtn,
};