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
const maxDepth = root => {
    if (root === null) {
        //if root is null, we have an empty tree or end of a branch and return 0.
        return 0;
    }

    // Recursively call maxDepth on the left and right children of the current node.
    // Math.max is used to find the greater depth between the left and right subtrees.
    // Add 1 to include the current node in the depth count.
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
