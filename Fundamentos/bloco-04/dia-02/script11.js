let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*Primeiro preciso pegar cada número do meu array. Para isso vou usar um loop*/

/*Depois de criado o primeiro loop, que vai pegar o elemento do array, preciso de outro para checar o primeiro elemento com os demais */

/*Por fim, preciso cirar uma condição que troque os elementos de lugar caso o primeiro seja maior que o segundo */
for (let index1 = 0 ; index1 < numbers.length ; index1 += 1) {
    for(let index2 = 0 ; index2 < numbers.length - index1 ; index2 += 1){
        if(numbers[index2] < numbers[index2 + 1]){
            let k = numbers[index2];
            numbers[index2] = numbers[index2 + 1];
            numbers[index2 + 1] = k;
        }
    }
}
console.log(numbers);
/*Obs.: Pensei em resolver usando apenas um loop, porém o código só iria colocar o menor número no final, esquecendo dos outros. */

/*Obs.2: Para deixar o código mais eficiente, a cada número checado , diminuo em uma unidade a quantidade de vezes que o processo vai se repetir, por exemplo, se o código leva 9 vezes para checar todo o array em busco de valores menores, o próximo número só será checado 8 vezes, pois o número após ele é com certeza menor. */ 