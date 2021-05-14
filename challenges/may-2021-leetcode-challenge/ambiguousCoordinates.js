/**
 * @param {string} s
 * @return {string[]}
 */
const ambiguousCoordinates = (s) => {
  let possibleAnswers = [], xPoss;

  const compute = (str, xy) => {
    if(xy)
      for(let x of xPoss)
        possibleAnswers.push(`(${x}, ${str})`);
    else xPoss.push(str);
  };

  const parse = (str, xy) => {
    if(str.length === 1 || str[0] !== "0")
      compute(str, xy);
    if(str.length > 1 && str[str.length - 1] !== "0")
      compute(str.slice(0, 1) + "." + str.slice(1), xy);
    if(str.length > 2 && str[0] !== "0" && str[str.length - 1] !== "0")
      for(let i = 2; i < str.length; i++)
        compute(str.slice(0, i) + "." + str.slice(i), xy);
  };

  for(let i = 2; i < s.length - 1; i++) {
    let strs = [s.slice(1, i), s.slice(i, s.length - 1)];
    xPoss = [];
    for(let j = 0; j < 2; j++)
      if(xPoss.length || !j) parse(strs[j], j);
  }

  return possibleAnswers;
};
