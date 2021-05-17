/**
 * Definition for a binary tree node.
 * function TreeNode(value, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minCameraCover = (root) => {
  /* For optimal vision, cameras should always be placed on a node rather than a leaf. This suggests that we should work our way up from the bottom of the tree with a recursive depth first search. We will navigate down the tree, then place cameras on the way back up the recursion stack using the return values.

  Children can communicate the following:
  • Everything below is already being monitored.
  • A camera was placed below and can monitor the parent.
  • An unmonitored node below needs a camera placed above.
  */
  let ans = 0;
  const depthFirstSearch = node => {
    if(!node) return 0;
    let value = depthFirstSearch(node.left) + depthFirstSearch(node.right);
    if(value === 0) return 3;
    if(value < 3) return 0;
    ans++;
    return 1;
  };
  return depthFirstSearch(root) > 2 ? ans + 1 : ans;
};
