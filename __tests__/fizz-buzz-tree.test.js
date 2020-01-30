const { Tree, Node } = require('../challenges/tree/tree');
const fizzBuzzTree = require('../challenges/fizzBuzzTree/fizz-buzz-tree');

let makeTree = () => {
  const root = new Node(4);
  const L = new Node(3);
  const R = new Node(6);
  const LL = new Node(3);
  const LR = new Node(15);
  const LRL = new Node(150);
  const RL = new Node(9);
  const RR = new Node(15);
  const RRR = new Node(27);

  const Tree = new Tree(root);

  root.left = L;
  root.right = R;
  L.right = LR;
  R.right = RR;
  L.left = LL;
  LR.right = LRL;
  R.left = RL;
  RR.R = RRR;

  return Tree;

};

describe('FizzBuzz Tree', () => {
  it('When given a tree it should return "Fizz" for values divisible by 3', () => {
    let tree = makeTree();
    fizzBuzzTree(Tree);
    expect(tree.root.left.value).toBe('Fizz');
    expect(tree.root.right.value).toBe('Fizz');
  });
});
