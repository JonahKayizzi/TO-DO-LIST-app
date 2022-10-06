"use strict";

var _localstorage = _interopRequireDefault(require("../../__mocks__/localstorage"));

var _TaskList = _interopRequireDefault(require("./TaskList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LocalStorage = new _localstorage["default"]();
var myTaskList = new _TaskList["default"]();
myTaskList.tasks = LocalStorage.getItem();
describe('Updated task description', function () {
  test('Task description should change to new description', function () {
    var newTaskDesc = 'Task for yesterday';
    myTaskList.updateTask(newTaskDesc, 1);
    LocalStorage.setItem(myTaskList.tasks);
    expect(myTaskList.tasks[0].description).toEqual(newTaskDesc);
  });
});
describe('Updated task completion status', function () {
  test('Completed status should change from previous state', function () {
    var prevSta = myTaskList.tasks[1].completed;
    myTaskList.completionStatus(2);
    LocalStorage.setItem(myTaskList.tasks);
    var currSta = myTaskList.tasks[1].completed;
    expect(currSta).not.toEqual(prevSta);
  });
});
describe('Clear completed tasks', function () {
  test('No task should exist with completed status true', function () {
    myTaskList.clearCompleted();
    LocalStorage.setItem(myTaskList.tasks);
    myTaskList.tasks.forEach(function (task) {
      expect(task.completed).toBeFalsy();
    });
  });
});