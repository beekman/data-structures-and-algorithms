const { PseudoQueue } = require('../queues/queueWithStacks');
let queue;

queue = new PseudoQueue();

beforeEach(() => {
  queue = new PseudoQueue;
});

describe('PseudoQueue', () => {
  it('can enqueue items', () => {
    queue.enqueue(25);
    expect(queue.dequeue()).toEqual(25);
  });

  it('returns the first element in the queue after several items are enqueued', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    expect(queue.dequeue()).toEqual(1);
  });

  it('returns the fourth element in the queue after several items are enqueued and dequeued', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).toEqual(4);
  });
});
