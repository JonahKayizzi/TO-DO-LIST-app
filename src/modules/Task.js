export default class Task {
  constructor(desc, complete = false, idx) {
    this.description = desc;
    this.completed = complete;
    this.index = idx;
  }
}