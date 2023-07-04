/*
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.
Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const buddyStrings = (s, goal) => {
    if (
        s.length !== goal.length ||
        s.length === 1 ||
        goal.length === 1
    ) {
        return false;
    }

    if (s === goal) {
        const setData = new Set(s);
        return setData.size < s.length;
    }

    const diff = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diff.push(i);
        }
    }

    if (
        diff.length === 2 &&
        s[diff[0]] === goal[diff[1]] &&
        s[diff[1]] === goal[diff[0]]
    ) {
        return true;
    }

    return false;
};
