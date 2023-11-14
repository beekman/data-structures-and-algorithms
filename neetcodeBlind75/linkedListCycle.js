/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//Scope: More than 0 nodes and less than 10k
//Node values are between +/-100k
//pos is -1 or a valid linked list index
var hasCycle = function(head) {
    //Roadmap:
    //Create a slow and fast pointer positioned at the head
    let slow = head, fast = head;
    //while there are non-null for a pointer, it's a potential cycle.
    //the fast pointer will resolve faster.
    while (fast && fast.next) {
        //advance the pointers
        slow = slow.next;
        fast = fast.next.next;
        //if the pointers match, it's a cycle.
        if (slow == fast) return true;
    }
    return false;
};
