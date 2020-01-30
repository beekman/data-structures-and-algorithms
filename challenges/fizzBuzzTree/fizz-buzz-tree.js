const fizzBuzzTree = (Tree) => {

  let _walk = (Node) => {
    if(Node.left) { _walk(Node.left); }

    if(Node.value % 15 === 0) { Node.value = 'FizzBuzz'; }
    else if(Node.value % 5 === 0) { Node.value = 'Buzz'; }
    else if(Node.value % 3 === 0) { Node.value = 'Fizz'; }

    if(Node.right) { _walk(Node.right); }
  };

  _walk(Tree.root);

  return Tree;
};
