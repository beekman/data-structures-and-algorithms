const { generateRandomNumber } = require('./mathModule');

/**
 * A base binary tree node class, that has a value, and
 * optional left and/or right branches.
 * 
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 * 
 * @return {TreeNode} The instantiated TreeNode.
 */
function TreeNode(val, left=null, right=null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
 * Generates a random binary tree that has at least
 * one root TreeNode, setting values of nodes to
 * a range between minVal (inclusive) and maxVal (inclusive).
 * 
 * @param {number} minVal
 * @param {number} maxVal
 * @return {TreeNode} The randomly generated binary tree.
 */
function generateRandomTree(minVal, maxVal) {
  const root = new TreeNode(
    generateRandomNumber(minVal, maxVal),
  );
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    const hasLeft = generateRandomNumber(0,10);
    const hasRight = generateRandomNumber(0,10);
    if (hasLeft >= 5) {
      const left = new TreeNode(
        generateRandomNumber(minVal, maxVal),
      );
      node.left = left;
      queue.push(left);
    }

    if (hasRight >= 5) {
      const right = new TreeNode(
        generateRandomNumber(minVal, maxVal),
      );
      node.right = right;
      queue.push(right);
    }
  }

  return root;
}

/**
 * Traverses a binary tree starting from a root TreeNode,
 * which takes an optional parameter traversalType that
 * will log the traversal in the appropriate order for
 * inorder, preorder, or postorder traversals
 * 
 * @param {TreeNode} root
 * @param {string} traversalType
 */
function traverseTree(root, traversalType='inorder') {
  if (!['inorder', 'preorder', 'postorder'].includes(traversalType)) {
    console.log('Not a valid type of traversal!');
    return;
  }

  if (traversalType === 'preorder') {
    console.log(root);
  }

  if (root.left) {
    traverseTree(root.left, traversalType);
  }
  
  if (traversalType === 'inorder') {
    console.log(root);
  }

  if (root.right) {
    traverseTree(root.right, traversalType);
  }

  if (traversalType === 'postorder') {
    console.log(root);
  }
}

module.exports = {
  TreeNode,
  generateRandomTree,
  traverseTree,
}