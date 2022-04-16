let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Preciso de apenas um loop aqui, pois vou apenas analisar pares de números consecutivos */

for (let index1 = 0 ; index1 < numbers.length ; index1 += 1) {
    if(index1 < numbers.length - 1){
        let mult1 = numbers[index1] * numbers[index1 + 1];
        numbers[index1] = mult1;
    }
    else{
        let mult2 = numbers[index1] * 2;
        numbers[index1] = mult2;
    }
}
console.log(numbers);