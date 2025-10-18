/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    // Ensure nums1 is the shorter array for binary search optimization: O(log(min(m, n)))
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    // total elements
    const totalLength = m + n;
    // target size of the left partition (ceil((m+n)/2))
    const halfLength = Math.ceil(totalLength / 2);

    let low = 0;
    let high = m;

    while (low <= high) {
        // i is the number of elements taken from nums1 (size of the left part of nums1)
        const i = Math.floor((low + high) / 2);
        // j is the number of elements taken from nums2 (size of the left part of nums2)
        // i + j must equal halfLength
        const j = halfLength - i;

        // Elements at the border of the partition:
        // L1: last element of the left part of nums1 (or -Infinity if i=0)
        // R1: first element of the right part of nums1 (or +Infinity if i=m)
        const L1 = (i === 0) ? -Infinity : nums1[i - 1];
        const R1 = (i === m) ? Infinity : nums1[i];

        // L2: last element of the left part of nums2 (or -Infinity if j=0)
        // R2: first element of the right part of nums2 (or +Infinity if j=n)
        const L2 = (j === 0) ? -Infinity : nums2[j - 1];
        const R2 = (j === n) ? Infinity : nums2[j];

        // Check for a valid partition: max(left) <= min(right)
        if (L1 <= R2 && L2 <= R1) {
            // Found the correct partition

            // If totalLength is odd, the median is the largest element in the left partition
            if (totalLength % 2 !== 0) {
                return Math.max(L1, L2);
            }
            // If totalLength is even, the median is the average of the two middle elements:
            // max(left) and min(right)
            else {
                const maxLeft = Math.max(L1, L2);
                const minRight = Math.min(R1, R2);
                return (maxLeft + minRight) / 2.0;
            }
        }
        // Partition is not correct: L1 is too large, meaning we need fewer elements from nums1.
        else if (L1 > R2) {
            high = i - 1; // Try to move i to the left
        }
        // Partition is not correct: L2 is too large, meaning we need more elements from nums1
        // (because j is derived from i, decreasing j means increasing i).
        else { // L2 > R1
            low = i + 1; // Try to move i to the right
        }
    }
    // Should not reach here if inputs are valid arrays
    return 0.0;
};
