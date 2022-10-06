import TaskList from './TaskList';

const myTaskList = new TaskList();
myTaskList.addTask('Task 1', true, 1);
myTaskList.addTask('Task 2', false, 2);

describe('Updated task description', () => {

});

describe('Updated task completion status', () => {
  test('Completed status should change from previous state', () => {
    myTaskList.tasks.
    const prevSta = myTaskList.tasks
    myTaskList.completionStatus(2);
    expect()
  });
});

describe('Clear completed tasks', () => {
  test('No task should exist with completed status true', () => {
    myTaskList.clearCompleted();
    myTaskList.tasks.forEach((task) => {
      expect(task.completed).toBeFalsy();
    });
  });
});