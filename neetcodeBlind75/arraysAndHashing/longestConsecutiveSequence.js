/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums, maxScore = 0) => {

    let prevNum = null;
    //start value will have no left neighbor
    //figure out which numbers in the array have no left neighbor
    //convert array into set
    let numSet = new Set(nums);

    for (const num of [...numSet]) {
        //start values for consecutive sequences have no left neighbor
        if (numSet.has(num - 1)) continue;

        let currNum = num;
        let score = 1;

        //end values for consecutive sequences have no right neighbor
        //check for right neighbors and extend the streak until there is none
        const isStreak = () => numSet.has(currNum + 1);

        while (isStreak()) {
            currNum++;
            score++;
        }

        maxScore = Math.max(maxScore, score);
    }

    return maxScore;
};
