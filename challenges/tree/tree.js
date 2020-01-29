
class Node {
  constructor(val, leftChild, rightChild = null) {
    this.value = val;
    this.left = leftChild;
    this.right = rightChild;
    this.show = show;
  }
}
const show = () => {
  return this.value;
};
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
    console.log(Node.show() + ' ');
    inOrder(Node.right);
  }
};

const preOrder = (Node) => {
  if(!(Node == null)) {
    console.log(Node.show() + ' ');
    preOrder(Node.left);
    preOrder(Node.right);
  }
};

const postOrder(Node) {
  if(!(Node == null)) {
    postOrder(Node.left);
    postOrder(Node.right);
    console.log(Node.show() + " ");
  }
};


module.exports = { Node, Tree, inOrder };
