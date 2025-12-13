
// Write a function that reverses a string. The input string is given as an array of characters s. 
// You must do this by modifying the input array in-place with O(1)extra memory.

const str = ["v","i", "s", "h", "n", "u"]
// reverse this array of string

function reverseArray(arr){
    let len = arr.length
    let halfLen = Math.floor(len/2)

    for(let i=0; i < halfLen; i++){
       let temp = arr[i]
       arr[i] =  arr[len-1-i]
       arr[len-1-i] = temp  
    }
}

console.log(reverseArray(str))