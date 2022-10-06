import TaskList from './TaskList';

const myTaskList = new TaskList();
myTaskList.addTask('Task 1', true, 1);
myTaskList.addTask('Task 2', false, 2);

describe('Updated task description', () => {

});

describe('Updated task completion status', () => {
  test('Completed status should change from previous state', () => {
    const prevSta = myTaskList.tasks[1].completed;
    myTaskList.completionStatus(2);
    const currSta = myTaskList.tasks[1].completed
    expect(currSta).not.toEqual(prevSta);
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