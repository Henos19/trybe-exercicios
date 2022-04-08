let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigger = '';
// Deixar esse código mais eficiente e tirar esse smaller com várias letras.
let smaller = 'aaaaa';

for (i = 0 ; i < array.length ; i += 1) {
    if ( array[i].length > bigger.length){
        bigger = array[i];
    }
}
for (i = 0 ; i < array.length ; i += 1) {
    if ( array[i].length < smaller.length){
        smaller = array[i];
    }
}
console.log(bigger);
console.log(smaller);
