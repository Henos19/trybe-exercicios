let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let max = 1; 

for (i = 0 ; i < numbers.length ; i += 1){
    if ( numbers[i] > max){
        max = numbers[i]
    }
}

console.log(max)