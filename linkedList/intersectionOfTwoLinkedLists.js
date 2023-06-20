/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
The test cases are generated such that there are no cycles anywhere in the entire linked structure.
Note that the linked lists must retain their original structure after the function returns.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
    let a = headA, b = headB;
    while (a !== b) {
        // line up the ends of the lists by switching to the other list's head when we reach the end
        a = !a ? headB : a.next; // if a is null, set a to headB, else set a to a.next
        b = !b ? headA : b.next; // if b is null, set b to headA, else set b to b.next
    }
    // a and b will either be null or the intersection node
    return a;
};
