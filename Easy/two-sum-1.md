# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
-  My first things on the solution would be to do a double for loop. Although that wasn't the best solution and what was asked I wanted to brute force it just so I know I can solve it. Then I went back and optimized it using a Hashmap for optimized speed. Converted O(n^2) to O(n)

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialized a new Map() into a variable.
2. Iterate through each element with a for loop.
3. Check if map already .has() number as a key that equals the targeted number minus the current number being iterated...
4. If true => return the key of the index of that number and the current index of the value in the array we're iterating through (which is whatever i is currently equal to. (it would match the index of the array))
5. If false => take the current value being checked and store it as the 'key' in the map and the (i) as the value. (i) is the current number the for loop is at and is also the index of that stored array value.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# My Initial Solution
```
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
```

# Optimized Solution
```
var twoSum = function(nums, target) {
    let storage = new Map()
    for (let i = 0; i < nums.length; i++){
        if (storage.has(target - nums[i])){
            return [storage.get(target - nums[i]), i]
        } else {
            storage.set(nums[i], i)
        }
    }
    return []
};

//Create a array to hold answer.
//for loop  O(n) 

```