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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = root => {
  let head = null;
  const reversePreOrder = node => {
    if(node.right) reversePreOrder(node.right);
    if(node.left) reversePreOrder(node.left);
    node.left = null, node.right = head, head = node;
  };
  if(root) reversePreOrder(root);
};
