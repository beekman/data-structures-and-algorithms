/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
    let prev, next, curr;
    for (let i = 0; i < flowerbed.length; i++) {
        prev = flowerbed[i - 1];
        curr = flowerbed[i];
        next = flowerbed[i + 1];
        //if there are no flowers on or around this spot,
        if (!prev && !curr && !next) {
            //plant a flower and reduce n by 1.
            flowerbed[i] = 1;
            n--;
            if (n === 0) return true;
        }
    }
    return n <= 0;
};
