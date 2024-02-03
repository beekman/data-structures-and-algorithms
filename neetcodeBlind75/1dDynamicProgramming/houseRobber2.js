/**
 * @param {number[]} nums
 * @return {number}
 */

const circleRob = (nums) => {
    return (Math.max(rob(nums.slice(0, nums.length - 1)), (rob(nums.slice(1, nums.length))))
    )
}

const rob = function(nums) {
    const robHelper = (start, end, nums) => {
        let maxAtHouse = new Array(start + (end - start + 1));
        for (let i = start; i <= end; i++) {
            // if we rob the previous house, we can't rob the current house, but,
            //we can rob the current house and still take the money robbed until the previous, previous house.
            //set the max to whichever is greater.
            maxAtHouse[i] = Math.max((maxAtHouse[i - 1] ? maxAtHouse[i - 1] : 0), (maxAtHouse[i - 2] ? maxAtHouse[i - 2] : 0) + nums[i]);
        }
        return maxAtHouse[end];
    }

    if (nums.length <= 3) {
        return Math.max(...nums);
    }
    let money1 = robHelper(0, nums.length - 2, nums);
    let money2 = robHelper(1, nums.length - 1, nums);
    return Math.max(money1, money2);
}
