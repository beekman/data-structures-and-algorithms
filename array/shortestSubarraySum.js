/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
    let left = 0, right = 0, subArrSum = 0, shortestLen = 0;

        while (right < nums.length) {
            subArrSum += nums[right];

            while(subArrSum >= target) {
                let len = right - left +1;
                if (shortestLen === 0 || len < shortestLen) shortestLen = len;
                    subArrSum -= nums[left];
                    left++;
            }
            right++;
    }
    return shortestLen;
};
