import Task from './Task.js';

class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask = (desc, status, idx) => {
    const task = new Task(desc, status, idx);
    this.tasks.push(task);
    localStorage.setItem('storedTasks', JSON.stringify(this.tasks));
    return this.tasks;
  };

  removeTask = (index) => {
    this.tasks = this.tasks.filter((element, i) => {
      if (i === parseInt(index, 10)) {
        return false;
      }
      return true;
    });
    return this.tasks;
  }
}

const myTaskList = new TaskList();

export default myTaskList;