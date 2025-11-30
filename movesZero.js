const arr = [0,1,0,3,12]

function movesZero(arr){

    let x= 0;

    for(let i = 0; i< arr.length; i++){
        if(arr[i] != 0){
            // console.log(arr[i])
            arr[x] = arr[i]
            x++
        
        } 
    }

    for(let i = x; i< arr.length; i++){
        arr[i] = 0
    }

return arr
}


console.log(movesZero(arr))