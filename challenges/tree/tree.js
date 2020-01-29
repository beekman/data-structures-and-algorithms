
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
  add(value) {

    const node = this.root;

    if(!node) {
      this.root = new Node(value);
      return;
    }

    let _insert = (node) => {
      if(value < node.value) {

        if(node.left === null) {
          node.left = new Node(value);
          return;
        } else if(node.left !== null) {
          return _insert(node.left);
        }

      } else if(value >= node.value) {

        if(node.right === null) {
          node.right = new Node(value);
          return;
        } else if(node.right !== null) {
          return _insert(node.right);
        }

      } else {
        return null;
      }
    };
    _insert(node);
  }
}

module.exports = { Node, Tree };
