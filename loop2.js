// find the largest number the array
// find the smallest number the array

const arr =  [5,0,7,10,8,-17,-1] 

// function findlargest(arr){

// let largest = -Infinity ;

// for(let i=0; i< arr.length; i++){
//     if(arr[i] > largest){
//         largest = arr[i]
//     }
// }

// return largest

// }

function findSmaller(arr){

let smaller = Infinity ;

for(let i=0; i< arr.length; i++){
    if(arr[i] < smaller){
        smaller = arr[i]
    }
}

return smaller

}

const result = findSmaller(arr)
console.log(result)