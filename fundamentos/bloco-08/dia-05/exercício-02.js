const sum = (...parameters) => parameters.reduce((sumOfNumbers, actualValue) => sumOfNumbers + actualValue)

console.log(sum(1, 4, 5, 6, 10))