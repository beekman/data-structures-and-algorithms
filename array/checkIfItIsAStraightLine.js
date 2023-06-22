/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
*/
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const isStraight = ([[ax, ay], [bx, by], [cx, cy]]) => {
    return ((by - ay) * (cx - bx) === (cy - by) * (bx - ax));
};
const checkStraightLine = coordinates => {
    for (let i = 2; i < coordinates.length; i++) {
        if (!isStraight([coordinates[0], coordinates[1], coordinates[i]])) {
            return false;
        }
    }
    return true;
};
