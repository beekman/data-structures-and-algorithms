/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    //  the max amount of money that can be robbed from houses
    // up to two steps back from the current house being considered.
    let prevMax = 0;

    // the max amount of money that can be robbed up to the current
    // house, considering the constraint of not robbing two adjacent houses.
    let currMax = 0;

    // Loop through each house in the array.
    for (let x of nums) {
        // Store the original currMax value for later.
        let temp = currMax;

        // Update currMax to the max of two choices:
        // 1. Robbing this house (x) plus the max amount robbed up to two houses back (prevMax).
        // 2. Not robbing this house, which means the max amount remains as it was up to the previous house (currMax).
        currMax = Math.max(prevMax + x, currMax)

        // Update prevMax to the stored original currMax value from the previous iteration
        prevMax = temp;
    }

    // After considering all houses, currMax contains the max amount of money
    // that can be robbed without alerting the police. Return this value.
    return currMax;
}
