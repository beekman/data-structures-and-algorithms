class Node {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    const node = new Node(val, this.head);
    this.head = node;
  }

  includes(val) {
    let searchNode = this.head;
    while(searchNode) {
      if(val === searchNode.value) return true;
      searchNode = searchNode.next;
    }
    return false;
  }

  toString() {
    if(!this.head) return '';

    const nodes = [];
    let node = this.head;
    while(node) {
      nodes.push(node.value);
      node = node.next;
    }

    return nodes.join(' -> ');
  }
  append(value) {
    const lastNode = new Node(value);
    if(!this.head) {
      this.head = lastNode;
    } else {
      let searchNode = this.head;
      while(searchNode.next) {
        searchNode = searchNode.next;
      }
      searchNode.next = lastNode;
    }
  }

  insertAfter(value, newVal) {
    let insertedNode = new Node(newVal);
    let current = this.head;

    while(current.value !== value) {
      current = current.next;
    }
    insertedNode.next = current.next;
    current.next = insertedNode;
  }

  insertBefore(value, newVal) {
    let insertedNode = new Node(newVal);
    let current = this.head;

    while(current.next.value !== value) {
      current = current.next;
    }
    insertedNode.next = current.next;
    current.next = insertedNode;
  }
}

module.exports = { LinkedList };
