import _ from 'lodash';
import './style.css';
//import populateTasks from './modules/populateTasks.js';

let tasks = [
  {
    description: 'Sneak peak: To Do list',
    completed: true,
    index: 1,
  },
  {
      description: 'Pro-tips about your IDE 1',
      completed: false,
      index: 2,
  },

  {
      description: 'Morning session: Peer-to-peer code review',
      completed: true,
      index: 3,
  },

  {
      description: 'Daily standup',
      completed: true,
      index: 4,
  },

  {
      description: 'Pro-tips about your IDE',
      completed: false,
      index: 5,
  },

  {
      description: 'Get better at seeking help',
      completed: true,
      index: 6,
  },
];

const tasksContainer = document.querySelector('.todolist-placeholder');

tasks = tasks.sort((a,b)=> (b.index - a.index))

const populateTasks = () => {
    tasks.forEach((task) => {
        createHTMLelement('li', 'task-item', 'task-item', `${task.description}`, tasksContainer);
    });
}

const createHTMLelement = (newElement, className, id, inHTML, parent) => {
  const element = document.createElement(`${newElement}`);
  element.className = `${className}`;
  element.id = `${id}`;
  element.innerHTML = `${inHTML}`;
  parent.appendChild(element);
  return element;
};

window.onload = () => {
  populateTasks();
};