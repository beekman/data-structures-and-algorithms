/*
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

Example 1:
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation:
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

Example 2:
Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2
*/
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
const maxLevelSum = root => {
    const sums = [];

    const dfs = (node, level) => {
        if (!node) return;

        sums[level] = (sums[level] || 0) + node.val;

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    };

    dfs(root, 0);


    let maxIndex = 0;

    for (let i = 1; i < sums.length; i++) {
        if (sums[i] > sums[maxIndex]) {
            maxIndex = i;
        }
    }

    return maxIndex + 1;
};
