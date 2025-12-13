// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


let nums1 = [1,2,3,0,0,0]
let m = 3 
let nums2 = [2,5,6] 
let n = 3

function mergeArray(num1,m,num2,n){
let pointerOne = m-1
let pointerTwo = n-1
let insertIndex = m+n-1

while(pointerTwo >= 0){
    if(pointerOne >= 0 && num1[pointerOne] >= num2[pointerTwo]){
        num1[insertIndex] = num1[pointerOne]
        pointerOne -= 1
    }
    else{
        num1[insertIndex] = num2[pointerTwo]
        pointerTwo -= 1
    }

    insertIndex -= 1
}
return num1

}

console.log(mergeArray(nums1,m,nums2,n))