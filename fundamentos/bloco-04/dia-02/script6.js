let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let amountOfImpars = 0;

for (let num of numbers){
    if ( num % 2 !== 0){
        amountOfImpars += 1;
    }
}
console.log(amountOfImpars)