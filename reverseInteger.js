// var reverse = function(x) {
//     let reversed = 0;
//     let num = Math.abs(x); 
    
//         while (num > 0) {
//             let digit = num % 10;  
//              if (reversed > (2**31 - 1) / 10) return 0;
//             reversed = reversed * 10 + digit; 
//             num = Math.floor(num / 10);
//         }
    

//     return x < 0 ? -reversed : reversed;
// };

const reverse = function(n){

    let nCopy = n;
    n = Math.abs(n)

    let rev = 0;

    while(n>0){
        let rem = n%10;
        rev = (10* rev) + rem;
        n = Math.floor(n/10);
    }

   if(rev < - (2**32) || rev > (2**31)) return 0
   return nCopy < 0 ? -rev : rev

}