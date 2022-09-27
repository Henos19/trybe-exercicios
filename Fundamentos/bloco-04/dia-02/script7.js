let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let min = 100;

for (i = 0 ; i < numbers.length ; i += 1){
    if (numbers[i] < min){
        min = numbers[i];
    }
}
console.log(min);