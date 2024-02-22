/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    //first value of preorder will always be the root
    if (!preorder.length || !inorder.length) return null;

    return dfs(preorder, inorder)
}

const dfs = (preorder, inorder) => {
    const {leftInorder, mid, rightInorder} = getPointers(preorder, inorder);
    const root = new TreeNode(inorder[mid]);

    root.left = buildTree(preorder, leftInorder);
    root.right = buildTree(preorder, rightInorder);

    return root;
}

const getPointers = (preorder, inorder) => {
    const next = preorder.shift();
    //get the root value from preorder in inorder
    const mid = inorder.indexOf(next);
    //every value to the left of it will be the left subtree
    const leftInorder = inorder.slice(0, mid);
    //every value to the right of it will be the right subtree
    const rightInorder = inorder.slice(mid + 1);

    return {leftInorder, mid, rightInorder};
}
