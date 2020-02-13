module.exports = (tree) => {
  let currentMax = 0;
  let _walk = (node) => {
    if(node.left) _walk(node.left);
    currentMax = node.value > currentMax ? node.value : currentMax;
    if(node.right) _walk(node.right);
  };

  _walk(tree.root);

  return currentMax;
};
