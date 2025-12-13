// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

const arr = [2,2,1]

// var singleNumber = function(nums){
//     let hash = {}

//     for(let i=0; i< nums.length; i++){
//         if(!hash[nums[i]]){
//             hash[nums[i] = 1]
//         } else {
//             hash[nums[i]]++
//         }
//     }

//     for(let i=0;i<nums.length; i++){
//         if(hash[nums[i]] == 1){
//             return nums[i]
//         }
//     }
// }

// 2nd approch using bitwise xor operaor

var singleNumber = function(nums){
    let xor = 0;

    for(let i=0; i< nums.length;i++){
        xor = xor ^ nums[i]
    }

    return xor
}
