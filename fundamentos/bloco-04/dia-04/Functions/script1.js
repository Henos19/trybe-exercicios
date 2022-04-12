function reverse (name){
    let reverseName = '';
    for(let letter = name.length - 1; letter > -1 ; letter -= 1){
        reverseName += name[letter];
    }
    return reverseName;
}


function palindrome (name) {
    let palin = true
    for (let letter = 0 ; letter < name.length ; letter += 1) {
        if ( name !== reverse(name)){
            palin = false;
        }
    }

    if (palin == false){
        return 'Não é palíndromo :('
    }
    else {
        return 'Você tem um palíndromo!'
    }
}

let nome = 'arara';
console.log(palindrome(nome));