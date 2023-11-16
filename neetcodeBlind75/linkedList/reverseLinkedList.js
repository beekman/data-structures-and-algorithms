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
const reverseList = (head) => {
    let prev = null;
    let curr = head;
    let next = null;

    //as long as there are still values in the list
    while (curr !== null) {
        // save curr.next to the next variable
        next = curr.next;
        //reverse the pointers
        curr.next = prev;
        //advance prev and curr
        prev = curr;
        curr = next;
    }
    return prev;
};
