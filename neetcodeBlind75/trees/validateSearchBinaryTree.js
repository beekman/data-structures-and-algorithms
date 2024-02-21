/**
 * Time O(N) | Space O(H)
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    const isBaseCase = root === null;
    if (isBaseCase) return true;

    //root must be between the min and max values
    const isInvalid = (root.val <= min) || (max <= root.val);
    if (isInvalid) return false;

    //recursively check the left and right branches' validity
    return dfs(root, min, max);
};

const dfs = (root, min, max) => {
    const left = isValidBST(root.left, min, root.val);
    const right = isValidBST(root.right, root.val, max);

    return left && right;
}
