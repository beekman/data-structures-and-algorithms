class Queue {

  constructor() {
    this.queue = new Array();
  }

  enqueue(value) {
    let i = this.queue.length;
    this.queue[i] = value;
    return this;
  }

  dequeue() {
    if(!this.queue.length) {
      return;
    }
    let returned = this.queue[0];
    this.queue.splice(0, 1);
    return returned;
  }
  serialize() {
    return JSON.stringify(this.queue);
  }

  deserialize(value) {
    let queue = JSON.parse(value);
    queue.forEach(el => {
      this.enqueue(el);
    });
    return this;
  }
}

module.exports = Queue;
