# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
When I saw this problem It was already familiar to me from Codewars. I instantly knew what to do.

# Approach
<!-- Describe your approach to solving the problem. -->
I knew there was a data structure such as Set() that did exactly what I need which was store unique values. Automatically any duplicate values would not be stored and I could check that against the original array. 

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set([...nums]).size === nums.length ? false : true
};

```