class AnimalShelter {
  constructor() {
    
  }

  enqueue(animal) {
    if(animal.type === 'Dog') {
      dogQueue.front = animal;
    } else if(animal.type === 'Cat') {
      if(catQueue.front) {
        catQueue.next = catQueue.front;
      }
      catQueue.front = animal;
      this.frontCat = animal;
    }
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
    return top;
  }

  peek() {
    if(!this.top) return null;
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const node = new Node(value, null);
    if(this.isEmpty()) {
      this.front = node;
    } else {
      this.back.next = node;
    }
    this.back = node;
  }

  dequeue() {
    if(this.isEmpty()) return null;

    const front = this.front;
    this.front = this.front.next;
    if(this.isEmpty()) this.back = null;

    return front;
  }

  peek() {
    if(this.isEmpty()) return null;
    return this.front.value;
  }

  isEmpty() {
    return !this.front;
  }
}
