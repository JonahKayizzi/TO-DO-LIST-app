import createHTMLelement from './createHTMLelement.js';

let tasks = [
    {
      description: 'Sneak peak: To Do list',
      completed: true,
      index: 1,
    },
    {
        description: 'Pro-tips about your IDE',
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

export default () => {
    tasks.forEach((task) => {
        createHTMLelement('li', 'task-item', 'task-item', `${task.description}`, tasksContainer);
    });
}