
class Node {
  constructor(val, leftChild, rightChild = null) {
    this.value = val;
    this.left = leftChild;
    this.right = rightChild;
  }
}
class Tree {

  constructor(root) {
    this.root = root;
  }

  inOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      results.push(node.value);
      if(node.right) { _walk(node.right); }
    };
    _walk(this.root);

    return results.toString();
  }

  preOrder() {
    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
    };
    _walk(this.root);

    return results.toString();
  }

  postOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
      results.push(node.value);
    };
    _walk(this.root);

    return results.toString();
  }
}

module.exports = { Node, Tree };
