
const BinarySearch = (arr, key) => {
  let mid = (Math.floor((arr.length - 1) / 2));
  if(arr[mid] === key) return mid;
  else if(arr[mid] > key) {
    mid = Math.floor(mid / 2);
  }

  if(arr[mid] === key) return arr[mid];
  return arr[mid];


};

module.exports = { BinarySearch };
