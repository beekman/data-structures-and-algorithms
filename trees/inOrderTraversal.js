//Given the root of a binary tree, return the inorder traversal of its nodes' values.
//Input: root = [1,null,2,3]
//Output: [1,3,2]
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
 * @return {number[]}
 */
const inorderTraversal = (root) => {
    let stack = [];
    let values = [];
    let current= root;

    while (current || stack.length !== 0){
        while(current){
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        values.push(current.val)
        current = current.right
    }
    return values

};
