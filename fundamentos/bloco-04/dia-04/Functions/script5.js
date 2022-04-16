let teste = [2, 3, 2, 5, 8, 2, 3];
/*Tentei fazer o seguinte aqui: analisar cada elemento e guardar a quantidade de vezes que ele se repete - usei o amount para isso; comparar essa quantidade com a quantidade do elemento anterior, e, se for maior, guardar o novo valor para comparações futuras e um valor para caso não exista mais nenhum elemento maior. */

function mostRecurrent (array) {
    let amount = 0;
    let amountCompar = 1;
    let amountRecu = 0;
    for (let range1 of array) {
        for (let range2 of array) {
            if (range2 === range1) {
                amount += 1;
            }
        }
        if (amount > amountCompar) {
            amountCompar = amount;
            amountRecu = range1;
        }

        amount = 0;
    }
    
    return amountRecu;
}
console.log(mostRecurrent(teste));