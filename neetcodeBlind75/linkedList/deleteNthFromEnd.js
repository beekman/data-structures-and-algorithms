/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //set left pointer to the element before the one you want to delete so its properties can be reassigned
    let dummy = new ListNode(0, head)
    let left = dummy
    let right = head

    while (n > 0 && right) {
        right = right.next
        n--;
    }

    while (right) {
        left = left.next
        right = right.next
    }

    //delete
    left.next = left.next.next
    return dummy.next
};
