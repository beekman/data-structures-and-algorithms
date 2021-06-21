class Node {
  constructor(value, left, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class Tree {

  constructor(root) {
    this.root = root;
  }

  inOrder() {
    let results = [];

    let crawlTree = (Node) => {
      if(Node.left) { crawlTree(Node.left); }
      results.push(Node.value);
      if(Node.right) { crawlTree(Node.right); }
    };
    crawlTree(this.root);

    return results.toString();
  }

  preOrder() {
    let results = [];

    let crawlTree = (Node) => {
      results.push(Node.value);
      if(Node.left) { crawlTree(Node.left); }
      if(Node.right) { crawlTree(Node.right); }
    };
    crawlTree(this.root);

    return results.toString();
  }

  postOrder() {
    let results = [];

    let crawlTree = (Node) => {
      if(Node.left) { crawlTree(Node.left); }
      if(Node.right) { crawlTree(Node.right); }
      results.push(Node.value);
    };
    crawlTree(this.root);

    return results.toString();
  }
  add(value) {

    const Node = this.root;

    if(!Node) {
      this.root = new Node(value);
      return;
    }

    let _add = (Node) => {
      if(value < Node.value) {

        if(Node.left === null) {
          Node.left = new Node(value);
          return;
        } else if(Node.left !== null) {
          return _add(Node.left);
        }

      } else if(value >= Node.value) {

        if(Node.right === null) {
          Node.right = new Node(value);
          return;
        } else if(Node.right !== null) {
          return _add(Node.right);
        }

      } else {
        return null;
      }
    };
    _add(Node);
  }
}

module.exports = { Node, Tree };
