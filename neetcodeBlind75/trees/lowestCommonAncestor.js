/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let cur = root

    while (cur) {
        if (p.val > cur.val && q.val > cur.val) {
            //if both values are larger, follow the right branch
            cur = cur.right;
        }
        else if (p.val < cur.val && q.val < cur.val) {
            //if both values are smaller, follow the left branch
            cur = cur.left
        }
        //if you reach a node that splits between the two values, that's the LCA
        //also, if you reach a node that is either p or q, that's the LCA.
        else return cur;
    }

};
