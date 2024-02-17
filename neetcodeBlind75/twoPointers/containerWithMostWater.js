/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let max = 0;
    let left = 0;
    let right = height.length - 1;


    while (left < right) {
        let containerHeight, area
        let containerWidth = right - left;


        if (height[left] < height[right]) {
            containerHeight = height[left];
            left++;
        } else {
            containerHeight = height[right];
            right--;
        }

        area = containerWidth * containerHeight;

        if (area > max) {
            max = area;
        }
    }
    return max
};
