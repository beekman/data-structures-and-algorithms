export function reverseArray(arr) {
  for(let i = 0;i <= Math.floor((arr.length - 1) / 2);i++) {
    let el = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = el;
  }
  return arr;
}
