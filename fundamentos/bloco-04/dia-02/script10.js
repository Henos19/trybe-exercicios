let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 39, 45, 1];

for (x = 0 ; x < numbers.length ; x += 1){
    for (y = 0 ; y < numbers.length - x ; y += 1){
        if(numbers[y] > numbers[y + 1]){
            let k = numbers[y];
            numbers[y] = numbers[y + 1];
            numbers [y+1] = k;
        }
    }
}
console.log(numbers);