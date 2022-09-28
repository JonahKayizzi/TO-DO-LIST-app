import myTaskList from './TaskList.js';
import createHTMLelement from './createHTMLelement.js';

const tasksContainer = document.querySelector('.todolist-placeholder');

const sortedTasks = myTaskList.tasks.sort((a, b) => (b.index - a.index));

export default () => {
  sortedTasks.forEach((task) => {
    const taskElement = createHTMLelement('li', 'task-item', 'task-item', '', tasksContainer);
    const checkBox = createHTMLelement('input', 'task-complete', 'task-complete', '', taskElement);
    checkBox.type = 'checkbox';
    checkBox.name = 'task-complete';
    const taskEdit = createHTMLelement('input', 'task-edit text-inp', 'task-edit', '', taskElement);
    taskEdit.type = 'text';
    taskEdit.name = 'task-edit';
    taskEdit.value = `${task.description}`;
    createHTMLelement('button', 'task-delete', 'task-delete', 'Delete', taskElement);
  });
};
