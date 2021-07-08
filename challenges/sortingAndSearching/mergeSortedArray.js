/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  m--;
  n--;
  let i = nums1.length - 1;
  while(i >= 0) {
    if(n > -1 && m > -1 && nums1[m] >= nums2[n]) {
      nums1[i] = nums1[m];
      nums1[m] = nums2[n];
      m--;
    }
    else if(n > -1) {
      nums1[i] = nums2[n--];
    }
    i--;
  }
};
