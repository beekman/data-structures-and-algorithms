/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  let resultArray = [];
  let dict = {};
  for(let i = 0; i < nums1.length; i++) {
    if(!dict[nums1[i]]) {
      dict[nums1[i]] = 0;
    }
    dict[nums1[i]]++;
  }
  for(let j = 0; j < nums2.length; j++) {
    if(dict[nums2[j]] > 0) {
      resultArray.push(nums2[j]);
      dict[nums2[j]]--;
    }
  }
  return resultArray;
};
