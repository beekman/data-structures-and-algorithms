/**
 * Given a binary tree, return the level order traversal of its nodes’ values. (ie, from left to right, level by level).
 *
 * Definition for a binary tree node:
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = root => {
  if(!root) return []; //edge case: no root returns an empty array
  let result = [];
  let queue = [root];
  while(queue.length != 0) {
    let currentLevelArray = [];
    const n = queue.length;
    for(let i = 0; i < n; i++) {
      //start processing the first node off the queue
      let node = queue.pop();
      //add the node to the current level's subarray...
      currentLevelArray.push(node.val);
      //then add the node's left and right values to the queue
      if(node.left) queue.unshift(node.left);
      if(node.right) queue.unshift(node.right);
    }
    //push the current level's array to the main result
    result.push(currentLevelArray);
  }
  return result;
};
