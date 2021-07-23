const multiBracketValidation = (input) => {
  const parenTokens = [['{', '}'], ['[', ']'], ['(', ')']];
  if(input === null) return true;

  let stringBeingTested = input.split('');
  let stack = [];
  let isValid = true;
  for(let i = 0; i < stringBeingTested.length; i++) {
    if(isParens(stringBeingTested[i])) {
      if(isOpenParens(stringBeingTested[i])) {
        stack.push(stringBeingTested[i]);
      } else {
        if(stack.length === 0) {
          isValid = false;
        }
        let top = stack.pop(); // pop off the top element from stack
        if(!matches(top, stringBeingTested[i])) {
          isValid = false;
        }
      }
    }
  }


  function isParens(char) {
    let str = '{}[]()';
    if(str.indexOf(char) > -1) {
      return true;
    } else {
      return false;
    }
  }

  function isOpenParens(parensChar) {
    for(let j = 0; j < parenTokens.length; j++) {
      if(parenTokens[j][0] === parensChar) {
        return true;
      }
    }
    return false;
  }

  function matches(topOfStack, closedParenthesis) {
    for(let k = 0; k < parenTokens.length; k++) {
      if(parenTokens[k][0] === topOfStack &&
        parenTokens[k][1] === closedParenthesis) {
        return true;
      }
    }
    return false;
  }

  return isValid;
};

module.exports = { multiBracketValidation };
