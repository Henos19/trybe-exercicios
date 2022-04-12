//FIz esse exercício usando o código do exercício anterior com recursos diferentes.

function min(array){
    let minNumber = 100;
    for(let range of array){
        if( range < minNumber ){
            minNumber = range;
        }
    }
    return minNumber;
}

function indexMin (array){
    console.log(array.indexOf(min(array)))
}

let list = [2, 4, 6, 7, 10, 0, -3];
indexMin(list);