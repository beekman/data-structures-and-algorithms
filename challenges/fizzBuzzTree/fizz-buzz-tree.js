module.exports = function fizzBuzzTree(Tree) {
  let crawlTree = (Node) => {
    if(Node.left) { crawlTree(Node.left); }

    if(Node.value % 15 === 0) { Node.value = 'FizzBuzz'; }
    else if(Node.value % 5 === 0) { Node.value = 'Buzz'; }
    else if(Node.value % 3 === 0) { Node.value = 'Fizz'; }

    if(Node.right) { crawlTree(Node.right); }
  };

  crawlTree(Tree.root);
  return Tree;
};
