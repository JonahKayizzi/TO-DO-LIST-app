"use strict";

var _TaskList = _interopRequireDefault(require("./TaskList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var myTaskList = new _TaskList["default"]();
myTaskList.addTask('Task 1', true, 1);
myTaskList.addTask('Task 2', false, 2);
describe('Updated task description', function () {});
describe('Updated task completion status', function () {});
describe('Clear completed tasks', function () {
  test('No task should exist with completed status true', function () {
    myTaskList.clearCompleted();
    myTaskList.tasks.forEach(function (task) {
      expect(task.completed).toBeFalsy();
    });
  });
});