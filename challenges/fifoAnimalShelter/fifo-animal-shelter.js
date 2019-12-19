const { Stack } = require('../queueWithStacks/queue-with-stacks');

class AnimalShelter {
  constructor() {
    this.dogQueue = new Stack();
    this.catQueue = new Stack();
  }

  enqueue(Animal) {
    if(Animal.type === 'Dog') {
      this.dogQueue.push(Animal);
    } else if(Animal.type === 'Cat') {
      this.catQueue.push(Animal);
    }
  }

  dequeue(Animal) {
    if(Animal.type === 'Dog') {
      this.dogQueue.pop(Animal);
    } else if(Animal.type === 'Cat') {
      this.catQueue.pop(Animal);
    }
  }
}

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.type = 'Cat';
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.type = 'Dog';
  }
}

module.exports = { Animal, Cat, Dog, AnimalShelter };
