/*Talvez eu não precisava ter transformado ambas as palavras em arrays. Fica como teste para a próxima vez. */

function checkEndOfWord (word, endOfWord) {
    let endIsEqual = true;
    let arrayWord = [];
    let arrayEndOfWord = [];
    
    for (let index = 0 ; index < word.length ; index += 1) {
        arrayWord.push(word[index]);
    }
    for (let index = 0 ; index < endOfWord.length ; index += 1){
        arrayEndOfWord.push(endOfWord[index]);
    }
    for (let range = 1 ; range <= arrayEndOfWord.length ; range += 1) {
        if (arrayWord[arrayWord.length - range] === arrayEndOfWord[arrayEndOfWord.length - range]) {
            endIsEqual = true;
        }
        else {
            endIsEqual = false;
            break
        }
    }
    return endIsEqual;
}

console.log(checkEndOfWord('joafenando', 'fernan'));

