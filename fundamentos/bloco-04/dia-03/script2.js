let word = 'tryber';
let invert = '';

for ( i = 1 ; i < word.length + 1 ; i += 1) {
    invert += word[word.length - i];
}
console.log(invert);