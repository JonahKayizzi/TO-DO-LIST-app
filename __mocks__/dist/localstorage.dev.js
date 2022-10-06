"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setItem = exports.getItem = void 0;
var storedTasks = [{
  index: 1,
  description: 'Task 1',
  completed: true
}, {
  index: 2,
  description: 'Task 2',
  completed: false
}];

var getItem = function getItem() {
  return storedTasks;
};

exports.getItem = getItem;

var setItem = function setItem(arrOfTasks) {
  storedTasks = arrOfTasks;
};

exports.setItem = setItem;