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
    this.tasks.forEach((task, i) => {
      if (task.index === parseInt(index, 10)) {
        this.tasks.splice(i, 1);
      }
    });
    this.tasks.forEach((e, i) => {
      e.index = i + 1;
    });
    localStorage.setItem('storedTasks', JSON.stringify(this.tasks));
    return this.tasks;
  }

  updateTask =(desc, index) => {
    this.tasks.forEach((task) => {
      if (task.index === parseInt(index, 10)) {
        task.description = desc;
      }
    });
    localStorage.setItem('storedTasks', JSON.stringify(this.tasks));
    return this.tasks;
  }

  completionStatus = (index) => {
    this.tasks.forEach((task) => {
      if (task.index === parseInt(index, 10)) {
        task.completed = !task.completed;
      }
    });
    localStorage.setItem('storedTasks', JSON.stringify(this.tasks));
    return this.tasks;
  }

  clearCompleted = () => {
    this.tasks = this.tasks.filter((element) => {
      if (element.completed === true) {
        return false;
      }
      return true;
    });
    this.tasks.forEach((e, i) => {
      e.index = i + 1;
    });
    localStorage.setItem('storedTasks', JSON.stringify(this.tasks));
    return this.tasks;
  }
}

const myTaskList = new TaskList();

export default myTaskList;