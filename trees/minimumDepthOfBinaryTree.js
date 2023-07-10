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

const minDepth = function(root) {
    let leftDepth = root.left, rightDepth = root.right;
    if(root == null) return 0;
    if(leftDepth == null && rightDepth == null) return 1;
    if(leftDepth == null) return 1 + minDepth(rightDepth);
    //if left subtree is empty, return depth of right subtree
    if(rightDepth == null) return 1 + minDepth(leftDepth);
    //if right subtree is empty, return depth of left subtree
    return Math.min(minDepth(leftDepth), minDepth(rightDepth)) + 1;
    //otherwise use the minimum of the two, adding one for the current node
};
