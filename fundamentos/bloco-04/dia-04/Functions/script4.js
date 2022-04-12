function biggestName(array){
    let size = '';
    for(let range1 of array){
        if (range1.length > size.length){
            size = range1;
        }
    }
    
    return size
}

let list = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(biggestName(list));