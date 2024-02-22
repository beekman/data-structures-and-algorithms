/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k, stack = []) {
    while (k--) {
        //move to the leftmost node
        root = moveLeft(root, stack);

        //if k is 0, then the current node is the kth smallest
        const isSmallest = k === 0;
        if (isSmallest) return root.val;

        root = root.right;
    }
}

const moveLeft = (root, stack) => {
    while (root !== null) {
        //push the current node to the stack
        stack.push(root);
        //move to the leftmost node
        root = root.left;
    }

    //pop the last node from the stack
    return stack.pop();
}
