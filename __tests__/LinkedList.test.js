const { LinkedList } = require('../challenges/linkedList/LinkedList');

describe('should return true if a value exists within a linked list', () => {
  it('should append a new Node with a given value at the end of the list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(3),
    linkedList.insert(2),
    linkedList.insert(1);

    expect(linkedList.includes(2)).toEqual(true);

    expect(linkedList.includes(29)).toEqual(false);
  });
});

describe('toString function', () => {
  it('should return a blank string for an empty node list', () => {
    const noList = new LinkedList();
    expect(noList.toString()).toEqual('');
  });
});

describe('append function', () => {
  it('should append a new Node with a given value at the end of the list', () => {
    const linkedList = new LinkedList();
    linkedList.append(3),
    linkedList.insert(2),
    linkedList.insert(1);
    linkedList.append(0);

    expect(linkedList.toString()).toEqual('1 -> 2 -> 3 -> 0');
  });
});

describe('insertBefore function', () => {
  it('should allow you to insert a value before a specified value in a LinkedList', () => {
    const linkedList = new LinkedList();
    linkedList.append(3),
    linkedList.insert(2),
    linkedList.insertBefore(3, 1);
    console.log(linkedList.toString());
    expect(linkedList.toString()).toEqual('2 -> 1 -> 3');
  });
});

describe('insertAfter function', () => {
  it('should allow you to insert a value before a specified value in a LinkedList', () => {
    const linkedList = new LinkedList();
    linkedList.append(3),
    linkedList.insert(2),
    linkedList.insertAfter(2, 1);
    console.log(linkedList.toString());
    expect(linkedList.toString()).toEqual('2 -> 1 -> 3');
  });
});
