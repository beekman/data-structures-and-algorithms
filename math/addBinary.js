/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // use BigInt() to convert binary to integer. `0b` is prefix and `11` is binary number
    let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    // convert the sum back to binary
    return sum.toString(2);
};
