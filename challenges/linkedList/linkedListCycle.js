/**
 * Given the head of a linked list, determine if the
 * linked list has a cycle in it.
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = (head) => {
  let history = new Set;
  while(head != null) {
    if(history.has(head)) return true;
    history.add(head);
    head = head.next;
  }
  return false;
};
