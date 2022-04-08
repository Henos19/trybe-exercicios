let n = 6;

//Tentar fazer de uma forma que não use '' em asteriscos//

for ( let i = 0 ; i < n ; i += 1){
    let astericos = '';

    for (let k = 0 ;  k < n ; k += 1){
        astericos += "*";
    }
    console.log(astericos);
}
