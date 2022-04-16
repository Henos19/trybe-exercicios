function summation (number){
    let sum = 0
    for (let range = 0 ; range <= number ; range += 1) {
        sum += range;
    }
    return sum
}

let num = 5;
console.log(summation(num));