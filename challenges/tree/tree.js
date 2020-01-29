
class Node {
  constructor(val, leftChild, rightChild = null) {
    this.value = val;
    this.left = leftChild;
    this.right = rightChild;
  }
}
class Tree {
  constructor() {
    this.root = null;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
  }
}

const inOrder = (Node) => {
  if(!(Node == null)) {
    inOrder(Node.left);
    console.log(node.show() + ' ');
    inOrder(Node.right);
  }
};

module.exports = { Node, Tree, inOrder };
