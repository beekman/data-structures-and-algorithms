const { BinaryTree } = require('../challenges/tree/binary-tree');
const { Node } = require('../challenges/tree/tree');
const { findMaximumValue } = require('../challenges/tree/find-maximum-binary-tree');

let makeTree = () => {
  const root = new Node(4);
  const L = new Node(3);
  const R = new Node(6);
  const LL = new Node(3);
  const LR = new Node(15);
  const RL = new Node(9);
  const RR = new Node(21);

  const tree = new BinaryTree(root);

  root.left = L;
  root.right = R;
  L.left = LL;
  R.left = RL;
  L.right = LR;
  R.right = RR;

  return tree;
};
it('when given no input, expect to Throw Error', () => {
  expect(() => {
    findMaximumValue();
  }).toThrow();
});

it('when given a valid tree, expect to return highest value', () => {
  let tree = makeTree();
  let maxValue = findMaximumValue(tree);

  expect(maxValue).toBe(21);
});
