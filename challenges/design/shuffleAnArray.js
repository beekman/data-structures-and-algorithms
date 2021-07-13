/**
 * @param {number[]} nums
 */
const Solution = function(nums) {
  this.nums = nums || [];
};


/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function() {
  return this.nums;
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  let r = [];
  this.nums.forEach((val, key) => r[key] = val); // need to copy key value one by one

  for(let i = 0; i < r.length; i++) {
    let rand = Math.floor(Math.random() * r.length);
    let tmp = r[i];
    r[i] = r[rand];
    r[rand] = tmp;
  }
  return r;
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/
