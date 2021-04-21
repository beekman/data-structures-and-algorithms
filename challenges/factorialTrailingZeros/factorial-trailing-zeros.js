export function zeros(n) {
  let result = 0;
  for(let i = 5; i <= n; i += 5) {
    let num = i;
    while(num % 5 === 0) {
      num /= 5;
      result++;
    }
  }
  return result;
}
