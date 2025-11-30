// pelindrom function

// when any integer can be read same from forward and backward is pelindrom number
// if reverse of any number == number
// pelindrom is any number or string

// in any number if you want to find the lst digit use : n % 10
// remove last digit from number : n / 10

const isPalindrome = function (x) {

    // if number is negative
    if (x < 0) {
        return false
    }

    let rev = 0;
    // keep the origin value of the number
    let xCopy = x

    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }

    // if (rev == xCopy) {
    //     return true
    // } else {
    //     return false
    // }

    return rev === xCopy
}