//LEVLE: Easy
//https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; i++) {
      if (nums[i] + nums[j] === target) {
        return [nums.indexOf(nums[i]), nums.lastIndexOf(nums[j])];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

//Time complexity: O(n^2)