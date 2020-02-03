const { Tree, Node } = require('../challenges/tree/tree');
let { BreadthFirstSearch } = require('../challenges/tree/breadth-first-tree');

let makeTree = () => {
  const root = new Node(4);
  const L = new Node(3);
  const R = new Node(6);
  const LL = new Node(3);
  const LR = new Node(15);
  const RL = new Node(9);
  const RR = new Node(21);

  const tree = new Tree(root);

  root.left = L;
  root.right = R;
  L.left = LL;
  R.left = RL;
  L.right = LR;
  R.right = RR;

  return tree;
};

describe('Breadth First Tree', () => {
  it('When given a tree it should return an array listing the elements on each level from left to right', () => {
    let tree = makeTree();
    BreadthFirstSearch(tree);
  });
});
