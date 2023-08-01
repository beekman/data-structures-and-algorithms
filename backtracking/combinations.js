/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
    const result = [];
    backtrack(n, k, 1, [], result);
    return result;
};

const backtrack = (n, k, start, combination, result) => {
    if (combination.length === k) {
        result.push([...combination]);
        return;
    }
    for (let i = start; i <= n; i++) {
        combination.push(i);
        backtrack(n, k, i + 1, combination, result);
        combination.pop();
    }
}
