let n = 5


// *****
// *****
// *****
// *****
// *****
// for(let i= 0; i< n; i++){
//     let row= ""
//     for( let j = 0; j< n; j++){
//         row = row + "*"
//     }

//     console.log(row)
// }


// *
// **
// ***
// ****
// *****
// for(let i= 0; i< n; i++){
//     let row= ""
//     for( let j = 0; j<= i or j< i+1; j++){
//         row = row + "*"
//     }

//     console.log(row)
// }

// 1
// 12
// 123
// 1234
// 12345
// for(let i= 0; i< n; i++){
//     let row= ""
//     for( let j = 0; j<= i; j++){
//         row = row + (j+1)
//     }

//     console.log(row)
// }

// 1
// 22
// 333
// 4444
// 55555
// for(let i= 0; i< n; i++){
//     let row= ""
//     for( let j = 0; j<= i; j++){
//         row = row + (i+1)
//     }

//     console.log(row)
// }

// 12345
// 1234
// 123
// 12
// 1
for(let i= 0; i< n; i++){
    let row= ""
    for( let j = 0; j< n-i; j++){
        row = row + (j+1)
    }

    console.log(row)
}