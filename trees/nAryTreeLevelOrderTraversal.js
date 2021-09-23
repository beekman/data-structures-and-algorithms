/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
const levelOrder = root => {
  const res = [];
  if(!root) {
    return res;
  }
  let frontier = [root];
  while(frontier.length) {
    const next = [];
    res.push(frontier.map(node => node.val));
    frontier.forEach((node) => {
      if(node.children) {
        next.push(...node.children);
      }
    });
    frontier = next;
  }
  return res;
};
