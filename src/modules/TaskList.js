import Task from './Task.js';

class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask = (desc, status, idx) => {
    const task = new Task(desc, status, idx);
    return this.tasks.push(task);
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

myTaskList.addTask('To do today', true, 1);

export default myTaskList;