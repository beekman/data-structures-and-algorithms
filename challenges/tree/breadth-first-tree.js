import { Queue } from '../queueWithStacks/queue';
function BreadthFirstSearch(root) {
  if(root === null) {
    return;
  }
  var queue = new Queue;
  queue.push(root);

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

export default BreadthFirstSearch;
