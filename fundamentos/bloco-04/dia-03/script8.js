let n = 5;
let auxiliar = '';
let espaco = ' ';
let asterisco = '*';

for (let index = 1 ; index <= n ; index += 2) {
    auxiliar = asterisco.repeat(index);
    console.log(espaco, auxiliar); 
}
