import './style.css';
import populateTasks from './modules/populateTasks.js';
import myTaskList from './modules/TaskList.js';

window.onload = () => {
  populateTasks();

  const addTaskBtn = document.querySelector('.add-task');

  addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newTask = document.querySelector('.new-task');
    myTaskList.addTask(newTask.value, false, myTaskList.tasks.length);
    console.log(myTaskList);
    populateTasks();
  });
};