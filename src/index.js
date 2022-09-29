import './style.css';
import myTaskList from './modules/TaskList.js';
import populateTasks from './modules/populateTasks.js';

window.onload = () => {
  const storedTasks = JSON.parse(window.localStorage.getItem('storedTasks'));
  if (storedTasks) {
    myTaskList.tasks = storedTasks;
  }
  populateTasks();
};