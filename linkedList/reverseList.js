/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = head => {
  let node = head, prev = null;
  while(node) {
    let oldNext = node.next;
    node.next = prev;
    prev = node;
    node = oldNext;
  }
  return prev;
};
