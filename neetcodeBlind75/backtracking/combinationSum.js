/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target, index = 0, combination = [], combinations = []) => {
    if (target < 0) return combinations;

    if (target === 0) {
        return combinations.push(combination.slice());
    }

    for (let i = index; i < candidates.length; i++) {
        backTrack(candidates, target, i, combination, combinations);
    }

    return combinations;
}

const backTrack = (candidates, target, i, combination, combinations) => {
    combination.push(candidates[i]);
    combinationSum(candidates, (target - candidates[i]), i, combination, combinations);
    combination.pop();
}
