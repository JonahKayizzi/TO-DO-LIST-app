export default class Localstorage {
  constructor() {
    this.storedTasks = [
      {
        index: 1,
        description: 'Task 1',
        completed: true,
      },
      {
        index: 2,
        description: 'Task 2',
        completed: false,
      },
    ];
  }

  getItem = () => this.storedTasks;

  setItem = (arrOfTasks) => {
    this.storedTasks = arrOfTasks;
  };
}
