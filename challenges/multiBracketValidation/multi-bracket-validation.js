const multiBracketValidation = (input) => {
  var tokens = [['{', '}'], ['[', ']'], ['(', ')']];
  if(input === null) return true;

  var stringBeingTested = input.split('');
  var stack = [];
  for(var i = 0;i < stringBeingTested.length;i++) {
    if(isParenthesis(stringBeingTested[i])) {
      if(isOpenParenthesis(stringBeingTested[i])) {
        stack.push(stringBeingTested[i]);
      } else {
        if(stack.length === 0) {
          return false;
        }
        var top = stack.pop(); // pop off the top element from stack
        if(!matches(top, stringBeingTested[i])) {
          return false;
        }
      }
    }

  }

  function isParenthesis(char) {
    var str = '{}[]()';
    if(str.indexOf(char) > -1) {
      return true;
    } else {
      return false;
    }
  }

  function isOpenParenthesis(parenthesisChar) {
    for(var j = 0;j < tokens.length;j++) {
      if(tokens[j][0] === parenthesisChar) {
        return true;
      }
    }
    return false;
  }

  function matches(topOfStack, closedParenthesis) {
    for(var k = 0;k < tokens.length;k++) {
      if(tokens[k][0] === topOfStack &&
        tokens[k][1] === closedParenthesis) {
        return true;
      }
    }
    return false;
  }
};



module.exports = { multiBracketValidation };
