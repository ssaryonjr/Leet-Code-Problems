

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
My first thoughts was I needed to use a hash map.. I heard Leon said "when in doubt, use a hash map!" And that's exactly what worked. Going into the problem I know I needed to figure out how many times each character in the string would repeat and have somewhere to store that data. 

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initially checked if both input lengths are equal, and if they are not we return false.. (don't need to do extra computation if its not even the same)
2. Used spread method within an array literal so I can use for of loop later.
3. Created two Hash maps for each string input.
4. In each for loop O(n), I added each string to the hash map. If it already existed, I increased the value by one.
5. After each string in the hash map has been added or incremented, I used a for of loop and checked if each key and value matched on both ends. If so the return value shoudl have a size of 0. If true is returned, it is a valid anagram, otherwise false.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false //Character amount isnt ==

    s = [...s] //['n','a','m','e']
    t = [...t] // ['m','e','a','n']

    let sMap = new Map()
    let tMap = new Map()

    for (let i = 0; i < s.length; i++){
        if (sMap.has(s[i])){
            let value = sMap.get(s[i])
            sMap.set(s[i], value + 1)
        } else {
            sMap.set(s[i], 1)
        }
    }

    for (let i = 0; i < t.length; i++){
        if (tMap.has(t[i])){
            let value = tMap.get(t[i])
            tMap.set(t[i], value + 1)
        } else {
            tMap.set(t[i], 1)
        }
    }

console.log(sMap)
console.log(tMap)

    for (const [key, value] of sMap){
        if ((tMap.has(key) === sMap.has(key)) && (tMap.get(key) === sMap.get(key))){
            sMap.delete(key)
            tMap.delete(key)
        } 
    }
   
   return sMap.size === 0
};

//Strings words
//True or false returned.
//isAnagram('mane', 'name') => true
//isAnagram('rat', 'cat') => 

//For loop, check if each letter in s also included in t. 
//If not, return false,
//Otherwise, return true
/* 
s = 'meaan' t = 'namef'

S:          T:
{'m', 1}    {'m', 1}
{'a', 2}    {'a', 1}
{'n', 1}    {'n', 1}
{'e', 1}    {'e', 1}
            {'f', 1}



{}

{key, value}
*/ 
```