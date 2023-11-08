/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
    for (let i = 0; i < flowerbed.length; i++) {
        //if there are no flowers on or around this spot,
        if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
            //plant a flower and reduce n by 1.
            flowerbed[i] = 1;
            n--;
            if (n === 0) return true;
        }
    }
    return n <= 0;
};
