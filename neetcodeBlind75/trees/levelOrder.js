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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return []
    return bfs([root]);
}

const bfs = (queue, levels = []) => {
    while (queue.length) {
        const level = [];

        for (let i = (queue.length - 1); 0 <= i; i--) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

            level.push(node.val);
        }

        levels.push(level.slice());
    }

    return levels;
};
