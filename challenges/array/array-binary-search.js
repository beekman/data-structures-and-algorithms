
const BinarySearch = (arr, key) => {
  let max = arr.length - 1;
  let min = 0;
  let mid = (Math.floor((max + min) / 2));
  while((arr[mid] != key) && min != max) {

    if(arr[mid] < key) {
      min = mid + 1;
      mid = (Math.floor((max + min) / 2));
    }

    if(arr[mid] > key) {
      max = mid - 1;
      mid = (Math.floor((max + min) / 2));
    }
  }

  if(arr[mid] === key) return mid;
  else return -1;
};

module.exports = { BinarySearch };
