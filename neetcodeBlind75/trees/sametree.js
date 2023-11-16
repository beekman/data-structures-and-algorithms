/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
    // if both nodes are null, they match.
    if (!p && !q) return true;
    // if just one node is null or the values are different, no match.
    if (!p || !q || p.val !== q.val) return false;
    //recursively iterate until all nodes are explored or there's no match.
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
