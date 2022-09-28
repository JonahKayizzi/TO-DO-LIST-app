import _ from 'lodash';
import './style.css';
import populateTasks from './modules/populateTasks.js';

window.onload = () => {
  populateTasks();
};