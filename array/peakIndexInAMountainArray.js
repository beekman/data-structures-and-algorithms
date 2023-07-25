/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = arr => {
    return arr.indexOf(Math.max(...arr));
};
