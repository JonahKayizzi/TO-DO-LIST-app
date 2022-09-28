import './style.css';
import myTaskList from './modules/TaskList.js';
import { createHTMLElement, createInputElement } from './modules/createHTMLelement.js';

window.onload = () => {
  const populateTasks = () => {
    const tasksContainer = document.querySelector('.todolist-placeholder');
    const sortedTasks = myTaskList.tasks.sort((a, b) => (b.index - a.index));
    tasksContainer.innerHTML = '';
    const taskItem = createHTMLElement('li', 'task-item', 'task-item', '', tasksContainer);
    const taskInput = createInputElement('input', 'new-task text-inp', 'new-task', 'text', 'new-task', '', taskItem);
    taskInput.placeholder = 'Add to your list';
    const addTaskBtn = createHTMLElement('button', 'add-task', 'add-task', '<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', taskItem);

    addTaskBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const newTask = document.querySelector('.new-task');
      myTaskList.addTask(newTask.value, false, myTaskList.tasks.length);
      console.log(myTaskList);
      populateTasks();
    });

    sortedTasks.forEach((task) => {
      const taskElement = createHTMLElement('li', 'task-item', 'task-item', '', tasksContainer);
      createInputElement('input', 'task-complete', 'task-complete', 'checkbox', 'task-complete', '', taskElement);
      createInputElement('input', 'task-edit text-inp', 'task-edit', 'text', 'task-edit', `${task.description}`, taskElement);
      const taskEdit = createHTMLElement('button', 'task-edit', `${task.index}`, '<i class="fa fa-arrows" aria-hidden="true"></i>', taskElement);
      const taskDrag = createHTMLElement('button', 'task-drag', 'task-drag', '<i class="fa fa-ellipsis-v" aria-hidden="true"></i>', taskElement);
      const taskDelete = createHTMLElement('button', 'task-delete', `${task.index}`, '<i class="fa fa-trash-o" aria-hidden="true"></i>', taskElement);

      taskDelete.addEventListener('click', (e) => {
        e.preventDefault();
        myTaskList.tasks.delete(taskDelete.id);
        populateTasks();
      });

      taskDrag.addEventListener('click', (e) => {
        e.preventDefault();
      // do something
      });

      taskEdit.addEventListener('click', (e) => {
        e.preventDefault();
      // do something
      });
    });
    const clearButton = createHTMLElement('li', 'task-item', 'task-item', '', tasksContainer);
    createHTMLElement('button', 'clear-completed', 'clear-completed', 'Clear all completed', clearButton);
  };

  const storedTasks = JSON.parse(window.localStorage.getItem('storedTasks'));
  if (storedTasks) {
    myTaskList.tasks = storedTasks;
    console.log(myTaskList.tasks);
    populateTasks();
  }
};