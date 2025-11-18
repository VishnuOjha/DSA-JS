// write a function that searches for an element in an array and return the index, if the elelemt is not present then just return -1

let arr = [1, 2, 3, 4, 5, 6]
let bun = 6




function searchElement(arr, searchNum) {
    console.log(arr, searchNum)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == searchNum) {
            return i
        } 
    }

    return -1
}

const ele = searchElement(arr, bun)
console.log("FIND", ele)

// write a function that return the number of negative numbers in array
