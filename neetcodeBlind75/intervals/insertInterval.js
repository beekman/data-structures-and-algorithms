/**
* @param {number[][]} intervals
* @param {number[]} newInterval
* @return {number[][]}
*/
const insert = function(intervals, newInterval) {
    const {beforeIndex: preIndex, before} = getBefore(intervals, newInterval);
    const postIndex = mergeIntervals(intervals, newInterval, preIndex);
    const after = intervals.slice(postIndex);

    return [...before, newInterval, ...after];
};

const getBefore = (intervals, newInterval, index = 0, before = []) => {
    const hasGap = ([prevStart, prevEnd], [currStart, currEnd]) =>
        prevEnd < currStart;

    while (index < intervals.length && hasGap(intervals[index], newInterval)) {
        const current = intervals[index];

        before.push(current);
        index++;
    }

    return {beforeIndex: index, before};
};

const mergeIntervals = (intervals, newInterval, index) => {
    const hasOverlap = ([prevStart, prevEnd], [currStart, currEnd]) =>
        currStart <= prevEnd;

    while (
        index < intervals.length &&
        hasOverlap(newInterval, intervals[index])
    ) {
        const current = intervals[index];

        newInterval[0] = Math.min(newInterval[0], current[0]);
        newInterval[1] = Math.max(newInterval[1], current[1]);
        index++;
    }

    return index;
};









