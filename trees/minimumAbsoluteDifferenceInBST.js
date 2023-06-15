//Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

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
 * @return {number}
 */
const getMinimumDifference = root => {
    let stack = [];
    let values = [];
    let current= root;

    while (current || stack.length !== 0){
        while(current){
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        values.push(current.val)
        current = current.right
    }
    let min = Infinity;
    for (let i = 0; i < values.length - 1; i++) {
        if (values[i + 1] - values[i] < min) {
            min = values[i + 1] - values[i];
        }
    }
    return min;
};
