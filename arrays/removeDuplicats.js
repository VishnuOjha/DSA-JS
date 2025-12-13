// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

const arr = [0,1,1,1,2,2,3,3,4,5,5,6]


function removeDuplicated(arr){
    let x = 0;

    for(let i= 0; i< arr.length; i++) {
        if(arr[i] > arr[x]){
            x = x+1;
            arr[x] = arr[i]
        }
    }

    return x+1
}

console.log(removeDuplicated(arr))