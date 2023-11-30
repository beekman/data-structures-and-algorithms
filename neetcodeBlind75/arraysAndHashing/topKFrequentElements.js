/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    // Create an empty hash map to store the frequency of each element in the array
    let counts = {};
    // Iterate through the input array and add the frequency of each element to the hash map
    for (let num of nums) {
        counts[num] = (counts[num] || 0) + 1;
    }

    // Create an empty array to store the elements based on their frequency
    const freq = Array.from({length: nums.length + 1}, () => 0);
    // Iterate through the hash map and add the elements to the frequency array based on their frequency
    for (const key in counts) {
        freq[counts[key]] = (freq[counts[key]] || []).concat(key);
    }

    // Create an empty array to store the top k frequent elements
    let ans = [];
    // Iterate through the frequency array from the highest frequency to the lowest
    for (let j = freq.length - 1; j >= 0; j--) {
        // If the current frequency array is not empty, add the elements to the ans array
        // and decrement k until k is 0 or the frequency array is empty
        for (let i = 0; i < freq[j].length && k > 0; i++) {
            ans.push(Number(freq[j][i]));
            k--;
        }
    }
    return ans;
};
