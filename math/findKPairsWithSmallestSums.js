/*
You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.
Define a pair (u, v) which consists of one element from the first array and one element from the second array.
Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

Example 1:
Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

Example 2:
Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [[1,1],[1,1]]
Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

Example 3:
Input: nums1 = [1,2], nums2 = [3], k = 3
Output: [[1,3],[2,3]]
Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
const kSmallestPairs = (nums1, nums2, k) => {
    if (nums1.length === 0 || nums2.length === 0) return [];
    let arr = []; // an array of objects
    let max = -Infinity;

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let obj = {
                sum: nums1[i] + nums2[j], // an array of the sums
                nums: [nums1[i], nums2[j]] // an array of the corresponding numbers
            };

            if (obj.sum >= max && arr.length >= k) {
                break;
            }

            else if (obj.sum <= max && arr.length < k) {
                arr.push(obj);
            }

            else if (obj.sum > max && arr.length < k) {
                max = obj.sum;
                arr.push(obj);
            }

            else if (obj.sum < max && arr.length >= k) {
                let newMax = -Infinity;
                let replaced = false;

                for (let n = 0; n < arr.length; n++) {
                    // remove one element where sum equals max
                    if (!replaced && arr[n].sum === max) {
                        // replace that element with obj
                        arr[n] = obj;
                        replaced = true;
                    }
                    // Set max to the new highest value sum in array
                    if (arr[n].sum > newMax) newMax = arr[n].sum;
                }
                // Set highest value sum as new max.
                max = newMax;
            }
        }
    }

    //Converts arr to contain only the pairs.
    return arr.map(obj => obj.nums);
};
