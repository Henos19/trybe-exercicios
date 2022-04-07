let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let max 

for (let num of numbers) {
   
    for (i = 0 ; i < numbers.length ; i += 1){
       
        if ( num < numbers[i] ){
           break
       }
       else {
           max = numbers[i]
       }
       
   }
}
console.log(max)