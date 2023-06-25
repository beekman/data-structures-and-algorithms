/*
You are given an array of distinct positive integers locations where locations[i] represents the position of city i. You are also given integers start, finish and fuel representing the starting city, ending city, and the initial amount of fuel you have, respectively.
At each step, if you are at city i, you can pick any city j such that j != i and 0 <= j < locations.length and move to city j. Moving from city i to city j reduces the amount of fuel you have by |locations[i] - locations[j]|. Please notice that |x| denotes the absolute value of x.
Notice that fuel cannot become negative at any point in time, and that you are allowed to visit any city more than once (including start and finish).
Return the count of all possible routes from start to finish. Since the answer may be too large, return it modulo 109 + 7.

Example 1:
Input: locations = [2,3,6,8,4], start = 1, finish = 3, fuel = 5
Output: 4
Explanation: The following are all possible routes, each uses 5 units of fuel:
1 -> 3
1 -> 2 -> 3
1 -> 4 -> 3
1 -> 4 -> 2 -> 3

Example 2:
Input: locations = [4,3,1], start = 1, finish = 0, fuel = 6
Output: 5
Explanation: The following are all possible routes:
1 -> 0, used fuel = 1
1 -> 2 -> 0, used fuel = 5
1 -> 2 -> 1 -> 0, used fuel = 5
1 -> 0 -> 1 -> 0, used fuel = 3
1 -> 0 -> 1 -> 0 -> 1 -> 0, used fuel = 5

Example 3:
Input: locations = [5,2,1], start = 0, finish = 2, fuel = 3
Output: 0
Explanation: It is impossible to get from 0 to 2 using only 3 units of fuel since the shortest route needs 4 units of fuel.
*/
/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
const countRoutes = (locations, start, finish, fuel) => {
    let n = locations.length;
    let mod = 1e9 + 7;
    let dp = [...Array(n)].map(() => Array(fuel + 1).fill(0));

    dp[finish][0] = 1;
    for (let f = 0; f <= fuel; f++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (j != i && f + Math.abs(locations[i] - locations[j]) <= fuel) {
                    dp[i][f + Math.abs(locations[i] - locations[j])] += dp[j][f];
                    dp[i][f + Math.abs(locations[i] - locations[j])] %= mod;
                }
            }
        }
    }

    let res = dp[start].reduce((a, b) => (a + b) % mod, 0);
    return res;
};
