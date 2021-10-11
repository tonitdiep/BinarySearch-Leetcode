// Leetcode 704. Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
//binary search cuts your list in half to find what you are looking for
nums = [-1, 0, 3, 5, 9, 12]
target = 9
var search = function(nums, target) {

////104ms runtime////
    let low = 0,
    high = nums.length - 1;

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (nums[mid] < target) {
          low = mid + 1;
        } else if (nums[mid] > target) {
          high = mid - 1;
        } else return mid;
      }
      return -1;

////105 ms runtime////
//     let lowestTarget = 0,
//     highestTarget = nums.length - 1;

//     while (lowestTarget <= highestTarget) {
//         // let medTarget = lowestTarget + ((highestTarget - lowestTarget)/2);
//         let medTarget =  Math.floor((highestTarget + lowestTarget)/2);
//         if (nums[medTarget] < target) {
//              lowestTarget = medTarget + 1;
//         } else if (nums[medTarget] > target) {
//              highestTarget = medTarget - 1; 
//         } else 
//             return medTarget
            
//     }   
//         return -1;

}
