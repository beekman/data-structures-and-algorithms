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
