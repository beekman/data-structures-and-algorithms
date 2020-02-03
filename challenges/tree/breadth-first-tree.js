let { PseudoQueue } = require ('../queueWithStacks/queue-with-stacks');

function BreadthFirstSearch(root) {
  if(root === null) {
    return;
  }
  let queue = new PseudoQueue();
  queue.enqueue(root);

  while(queue.length > 0) {
    var current = queue[0];

    if(current.left !== null) {
      queue.enqueue(current.left);
    }

    if(current.right !== null) {
      queue.enqueue(current.right);
    }
    queue.dequeue();
  }
}
module.exports = { BreadthFirstSearch };
