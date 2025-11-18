const arr = [1, 5, -6, 8, -9, 74, -85, 98]

function countNegativeNumbers(arr) {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count = count + 1

        }
    }

    return count

}

let negativeCount = countNegativeNumbers(arr)
console.log(negativeCount)