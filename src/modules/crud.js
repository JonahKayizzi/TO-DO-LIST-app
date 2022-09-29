import myTaskList from './TaskList.js';
import populateTasks from './populateTasks.js';

const addTaskEvent = () => {
  const addTaskBtn = document.querySelector('.add-task');
  addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newTask = document.querySelector('.new-task');
    const nxtIndex = myTaskList.tasks.length + 1;
    myTaskList.addTask(newTask.value, false, nxtIndex);
    populateTasks();
  });
};

const clearCompletedTasksEvent = () => {
  const clearButton = document.querySelector('.clear-completed');
  clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    myTaskList.clearCompleted();
    populateTasks();
  });
};

export { addTaskEvent, clearCompletedTasksEvent };
