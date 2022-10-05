import {
  createHTMLElement, selectElement, createTaskInputItem, createClearBtn,
} from './createHTMLelement.js';
import myTaskList from './TaskList.js';

const populateTasks = () => {
  const tasksContainer = selectElement('.todolist-placeholder');
  const sortedTasks = myTaskList.tasks.sort((a, b) => (b.index - a.index));
  tasksContainer.innerHTML = '';

  createTaskInputItem();
  const addTaskBtn = selectElement('.add-task');
  addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newTask = selectElement('.new-task');
    const nxtIndex = myTaskList.tasks.length + 1;
    myTaskList.addTask(newTask.value, false, nxtIndex);
    populateTasks();
  });

  sortedTasks.forEach((task) => {
    const taskElement = createHTMLElement('li', 'task-item', 'task-item', '', tasksContainer);
    taskElement.draggable = true;
    const checkComplete = createHTMLElement('input', 'task-complete', `${task.index}`, '', taskElement, 'checkbox', 'task-complete');
    const taskEdit = createHTMLElement('input', 'task-edit text-inp', 'task-edit', '', taskElement, 'text', 'task-edit', `${task.description}`);
    if (task.completed === true) {
      taskEdit.style.textDecoration = 'line-through';
      checkComplete.checked = true;
    }
    createHTMLElement('button', 'task-more', `${task.index}`, '<i class="fa fa-arrows" aria-hidden="true"></i>', taskElement);
    createHTMLElement('button', 'task-drag', 'task-drag', '<i class="fa fa-ellipsis-v" aria-hidden="true"></i>', taskElement);
    const taskDelete = createHTMLElement('button', 'task-delete', `${task.index}`, '<i class="fa fa-trash-o" aria-hidden="true"></i>', taskElement);

    taskDelete.addEventListener('click', (e) => {
      e.preventDefault();
      myTaskList.removeTask(taskDelete.id);
      populateTasks();
    });

    checkComplete.addEventListener('change', (e) => {
      e.preventDefault();
      myTaskList.completionStatus(checkComplete.id);
      populateTasks();
    });

    taskEdit.addEventListener('change', (e) => {
      e.preventDefault();
      myTaskList.updateTask(taskEdit.value, taskDelete.id);
    });
  });
  if (myTaskList.tasks.length !== 0) {
    createClearBtn();
    const clearButton = selectElement('.clear-completed');
    clearButton.addEventListener('click', (e) => {
      e.preventDefault();
      myTaskList.clearCompleted();
      populateTasks();
    });
  }
};

export default populateTasks;