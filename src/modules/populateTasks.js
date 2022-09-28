import tasks from './toDoTasks.js';
import createHTMLelement from './createHTMLelement.js';

const tasksContainer = document.querySelector('.todolist-placeholder');

let tasks = tasks.sort((a,b)=> (b.index - a.index))

export default () => {
    tasks.forEach((task) => {
        createHTMLelement('li', 'task-item', 'task-item', `${task.description}`, tasksContainer);
    });
}