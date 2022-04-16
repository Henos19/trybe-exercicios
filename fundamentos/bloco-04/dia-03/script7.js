let n = 5;
let espaco = '';
let espaco2 = ' ';
let asterisco = '';
let asterisco2 = '*';

for (let index = 1 ; index <= n ; index += 1) {
    espaco = espaco2.repeat(n - index);
    asterisco = asterisco2.repeat(index);
    console.log(espaco, asterisco); 
}
/*Obs.: Consegui fazer esse exercício usando o método String.repeat(), porém ainda utilizei variáveis auxiliares para me ajudar*/
