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
 * @return {TreeNode}
 */
const invertTree = root => {
    //return null if the head is null
    if (root === null) return null;
    //swap the left and right nodes using temp variable
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    //recursively call the function again for the left and right node.
    if (root.left) invertTree(root.left);
    if (root.right) invertTree(root.right);
    //once all the inversions are complete, return the root.
    return root;
};
