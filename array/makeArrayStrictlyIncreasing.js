/*
Given two integer arrays arr1 and arr2, return the minimum number of operations (possibly zero) needed to make arr1 strictly increasing.
In one operation, you can choose two indices 0 <= i < arr1.length and 0 <= j < arr2.length and do the assignment arr1[i] = arr2[j].
If there is no way to make arr1 strictly increasing, return -1.

Example 1:
Input: arr1 = [1,5,3,6,7], arr2 = [1,3,2,4]
Output: 1
Explanation: Replace 5 with 2, then arr1 = [1, 2, 3, 6, 7].

Example 2:
Input: arr1 = [1,5,3,6,7], arr2 = [4,3,1]
Output: 2
Explanation: Replace 5 with 3 and then replace 3 with 4. arr1 = [1, 3, 4, 6, 7].

Example 3:
Input: arr1 = [1,5,3,6,7], arr2 = [1,6,3,3]
Output: -1
Explanation: You can't make arr1 strictly increasing.
*/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
const makeArrayIncreasing = (arr1, arr2) => {
    arr2.sort((a, b) => a - b)
    const cache = new Map()

    // binary search for an element greater than provided value
    const getMinimalReplacement = noLessThan => {
        let left = 0
        let right = arr2.length - 1

        while (left < right) {
            const mid = Math.floor((left + right) / 2)

            if (arr2[mid] <= noLessThan) {
                left = mid + 1
            } else {
                right = mid
            }
        }

        return arr2[right] > noLessThan ? arr2[right] : -1
    }

    const dfs = (i, ops, prev) => {
        if (i >= arr1.length) return 0
        const str = `${prev}~${i}`
        if (cache.has(str)) return cache.get(str)

        // misOps - minimal number of operations for current i
        let minOps = Infinity;

        // replace with smallest possible from arr2
        const replacement = getMinimalReplacement(prev)
        //  if replacement == -1 => no replacement found
        if (replacement !== -1) {
            minOps = Math.min(minOps, dfs(i + 1, ops, replacement) + 1)
        }

        // no replacement
        if (arr1[i] > prev) {
            minOps = Math.min(minOps, dfs(i + 1, ops, arr1[i]))
        }
        cache.set(str, minOps)
        return minOps
    }

    const ops = dfs(0, 0, -1)
    return ops > arr2.length ? -1 : ops
};
