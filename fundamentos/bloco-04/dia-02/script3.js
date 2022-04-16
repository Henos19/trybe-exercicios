let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let med; 

for (let number of numbers) {
    sum = sum + number;
}
med = sum/numbers.length;

console.log(med);