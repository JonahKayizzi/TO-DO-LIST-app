import Localstorage from '../../__mocks__/localstorage';
import TaskList from './TaskList';

const LocalStorage = new Localstorage();

const myTaskList = new TaskList();

myTaskList.tasks = LocalStorage.getItem();

describe('Updated task description', () => {
  test('Task description should change to new description', () => {
    const newTaskDesc = 'Task for yesterday';
    myTaskList.updateTask(newTaskDesc, 1);
    LocalStorage.setItem(myTaskList.tasks);
    expect(myTaskList.tasks[0].description).toEqual(newTaskDesc);
  });
});

describe('Updated task completion status', () => {
  test('Completed status should change from previous state', () => {
    const prevSta = myTaskList.tasks[1].completed;
    myTaskList.completionStatus(2);
    LocalStorage.setItem(myTaskList.tasks);
    const currSta = myTaskList.tasks[1].completed;
    expect(currSta).not.toEqual(prevSta);
  });
});

describe('Clear completed tasks', () => {
  test('No task should exist with completed status true', () => {
    myTaskList.clearCompleted();
    LocalStorage.setItem(myTaskList.tasks);
    myTaskList.tasks.forEach((task) => {
      expect(task.completed).toBeFalsy();
    });
  });
});
