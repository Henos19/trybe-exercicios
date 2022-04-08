let number = 50;
let primeNumbers = [];

// Observação: tentei fazer o exercício mas travei na parte do if. Meu código ficava dando valores não primos porque eu fiz-o de tal forma que ele salvasse os números no primeNumbers após a verificação da condição. A ideia do gabarito foi mais interessante, pois caso algum valor fosse divisível por outro, essa informação ficaria armazenada em uma outra variável e seri usada para descobrir se o número é primo ou não.

for (let OurNumber = 1 ; OurNumber <= 50 ; OurNumber += 1){
    let isPrime = true;

    for(let divisors = 2 ; divisors < OurNumber ; divisors += 1){
        if( OurNumber % divisors === 0 ){
            isPrime = false;
            //primeNumbers.push(OurNumber);
        }
    }
    if (isPrime){
        primeNumbers.push(OurNumber);
    }
}
let max = 0;

for (i = 0 ; i < primeNumbers.length ; i += 1){
    if (primeNumbers[i] > max){
        max = primeNumbers[i];
    }
}
console.log(max);
