/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums, index = 0) => {
    const memo = new Array(nums.length).fill(0);
    memo[memo.length - 1] = 1;

    return canJumpFromIndex(nums, memo);
}

const canJumpFromIndex = (nums, memo, index = 0) => {
    if (memo[index] !== 0) return memo[index] === 1;

    const furthestJump = Math.min(index + nums[index], nums.length - 1);
    for (let nextIndex = (index + 1); nextIndex <= furthestJump; nextIndex++) {
        if (!canJumpFromIndex(nums, memo, nextIndex)) continue

        memo[index] = 1;
        return true;
    }

    memo[index] = -1;
    return false;
}
