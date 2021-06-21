const multiBracketValidation = (input) => {
  var parenTokens = [['{', '}'], ['[', ']'], ['(', ')']];
  if(input === null) return true;

  var stringBeingTested = input.split('');
  var stack = [];
  var isValid = true;
  for(var i = 0; i < stringBeingTested.length; i++) {
    if(isParens(stringBeingTested[i])) {
      if(isOpenParens(stringBeingTested[i])) {
        stack.push(stringBeingTested[i]);
      } else {
        if(stack.length === 0) {
          isValid = false;
        }
        var top = stack.pop(); // pop off the top element from stack
        if(!matches(top, stringBeingTested[i])) {
          isValid = false;
        }
      }
    }
  }


  function isParens(char) {
    var str = '{}[]()';
    if(str.indexOf(char) > -1) {
      return true;
    } else {
      return false;
    }
  }

  function isOpenParens(parensChar) {
    for(var j = 0; j < parenTokens.length; j++) {
      if(parenTokens[j][0] === parensChar) {
        return true;
      }
    }
    return false;
  }

  function matches(topOfStack, closedParenthesis) {
    for(var k = 0; k < parenTokens.length; k++) {
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
