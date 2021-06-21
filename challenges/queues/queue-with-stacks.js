class PseudoQueue {
  constructor() {
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }
  enqueue(value) {
    while(this.dequeueStack.peek() != null) {
      this.enqueueStack.push(this.dequeueStack.pop());
    }
    this.enqueueStack.push(value);
  }
  dequeue() {
    while(this.enqueueStack.peek() != null) {
      this.dequeueStack.push(this.enqueueStack.pop());
    }
    return this.dequeueStack.pop();
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    const node = new Node(value, this.top);
    this.top = node;
  }

  pop() {
    if(!this.top) return null;

    const top = this.top;
    this.top = top.next;
    return top.value;
  }

  peek() {
    if(!this.top) return null;
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
}

module.exports = { PseudoQueue, Stack, Node };
