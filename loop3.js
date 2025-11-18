// find the second largest number in the array

// corner cases
// 1-> Array is empty
// 2-> Array has duplicates
// 3-> Array has negative numbers

// const arr = [4,9,0,2,5,7,1]
// const arr = [-2,-10,-9,-2]
 const arr = [10,20,8,9,3,5,20]


function findSecondLargest(arr){

    // array must have minimum 2 elements
    if(arr.length < 2){
        return null
    }

    // if array have negative numbers

    let firstLargest = -Infinity
    let secondLargest = -Infinity

    for(let i=0; i< arr.length; i++){

        if(arr[i] > firstLargest)
        {
            // first assign the value to the second value of first largest
            // then assign the value to first largest
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } 
        // if araay has duplicated and you do not want the duplicate to be the second largest then add
        // arr[i] != firstLargest
        else if(arr[i] > secondLargest && arr[i] != firstLargest){
            // check in the array if any value is there is greater than second largest
            secondLargest = arr[i]
        }

    }

    return secondLargest;


}

const res = findSecondLargest(arr) 
console.log(res)