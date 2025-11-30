// write a function that returns the count of digits in the numbers

function countDigits(n) {
    // if n is 0
    if(n ==0) return 1

    // if n is negative
    n = Math.abs(n)
    
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10)
        count++
    }

    return count;

}

let num = 3456

let res = countDigits(num)
console.log(res)