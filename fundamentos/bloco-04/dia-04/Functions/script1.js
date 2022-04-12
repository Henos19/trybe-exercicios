function reverse (name){
    let reverseName = '';
    for(let letter = name.length - 1; letter > -1 ; letter -= 1){
        reverseName += name[letter];
    }
    return reverseName;
}


function palindrome (name) {
    if ( name !== reverse(name)){
        return 'Não é palíndromo :('
    }
    else {
        return 'Você tem um palíndromo!'
    }
}

let nome = 'araa';
console.log(palindrome(nome));