/* Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const permute = nums => {
    let results = [];

    let permutations = (current, remainingNums) => {
        if (remainingNums.length <= 0) {
            results.push(current.slice());
        }
        else {
            for (let i = 0; i < remainingNums.length; i++) {
                current.push(remainingNums[i]);// Insert the i'th element at the end of current
                permutations(current.slice(), remainingNums.slice(0, i).concat(remainingNums.slice(i + 1))); // Recurse with inserted element removed
                current.pop(); // Remove last inserted element for next iteration
            }
        }
    };
    permutations([], nums);     //recursively build the results array
    return results;
};
