/**
@param {string} s
@return {boolean}
*/

const isPalindrome = (s) => {
    // if s.length == 0 return true
    if (s.length == 0) {
        return true;
    }
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // First, ensure chars at left and right pointers are both "valid"
        // meaning they are alphanumeric
        if (isLetterOrDigit(s[left]) == false) {
            left++;
            continue;
        }

        if (isLetterOrDigit(s[right]) == false) {
            right--;
            continue;
        }

        // Once we have valid chars, we must compare them for equality.
        // if they are not equal, return false
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        // continue manipulating pointers inward
        left++;
        right--;
    }

    // if the program reaches this point we can safely return true
    return true;
};


const isLetterOrDigit = function(ch) {
    // ^[a-zA-Z0-9_]
    // NOT letters or digits
    const regexp = /[^a-z0-9$]/gi;
    return !regexp.test(ch);
};
