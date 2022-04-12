function max(array){
    let highNumber = 1;
    for(let range of array){
        if( range > highNumber ){
            highNumber = range;
        }
    }
    return highNumber;
}
function indexMax (array){
    console.log(array.indexOf(max(array)));
}

let list =  [2, 3, 6, 7, 10, 1];
indexMax(list);