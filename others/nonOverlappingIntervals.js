/*
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */

const eraseOverlapIntervals = (intervals) => {
    // Sort by the end of the interval
    intervals.sort((a, b) => a[1] - b[1]);
    let previousInterval = intervals[0];
    let counter = 0;
    for (let i = 1; i < intervals.length; i++) {
        //For [a] [b], remove b if b[0] < a[1]
        if (previousInterval[1] > intervals[i][0]) counter++;
        else previousInterval = intervals[i];
    }
    return counter;
};
