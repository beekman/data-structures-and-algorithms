const arrayShift = (array, value) => {
  const newArray = [];
  const midIndex = Math.ceil((array.length) / 2);
  for(let i = 0;i < array.length + 1;i++) {
    if(i < midIndex) {
      newArray[i] = array[i];
    }
    if(i === midIndex) {
      newArray[i] = value;
    }
    if(i > midIndex) {
      newArray[i] = array[i - 1];
    }
  }
  return newArray;
};
const arrayRemoveMiddle = (array) => {
  const newArray = [];
  const midIndex = Math.floor((array.length) / 2);
  for(let i = 0;i < array.length - 1;i++) {
    if(i < midIndex) {
      newArray[i] = array[i];
    }
    if(i >= midIndex) {
      newArray[i] = array[i + 1];
    }
  }
  return newArray;
};
module.exports = { arrayShift, arrayRemoveMiddle };
