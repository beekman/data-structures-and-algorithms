const findMin = (nums) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // If middle element is greater than the rightmost element,
            // the minimum is in the right half.
            left = mid + 1;
        } else {
            // If middle element is less than or equal to the rightmost element,
            // the minimum is in the left half including the mid.
            right = mid;
        }
    }

    // After the loop, left will be pointing to the smallest element.
    return nums[left];
};
