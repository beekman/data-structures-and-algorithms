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
 * @return {boolean}
 */
const isSymmetric = root => {
  if(!root) {
    return true;
  }

  const isMirror = (s, t) => {
    const q1 = [s];
    const q2 = [t];

    while(q1.length > 0 || q2.length > 0) {
      const n1 = q1.shift();
      const n2 = q2.shift();

      if(!n1 && !n2) continue;

      if(!n1 || !n2 || n1.val !== n2.val) return false;

      q1.push(n1.left);
      q1.push(n1.right);

      q2.push(n2.right);
      q2.push(n2.left);
    }

    return true;
  };

  return isMirror(root.left, root.right);
};
