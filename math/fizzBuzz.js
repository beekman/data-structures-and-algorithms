const fizzBuzz = n => {
  let array = [];
  for(i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
    }
    else if(i % 3 === 0) {
      array.push('Fizz');
    }
    else if(i % 5 === 0) {
      array.push('Buzz');
    }
    else array.push(String(i));
  }
  return array;
};
