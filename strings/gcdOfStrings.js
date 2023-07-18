/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";
    let s = "";
    let str = "";
    const length = Math.min(str1.length, str2.length);
    for (let i = 0; i < length; i++) {
        s = `${s}${str1[i]}`;
        if (!(str1.length % s.length) && !(str2.length % s.length)) str = s;
    }
    return str;
};
