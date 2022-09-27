let peca = "rei";

switch (peca){
    case "peao":
        console.log("Anda uma ou duas casas para frente no seu primeiro movimento, e depois anda apenas uma. Captura peças nas casas diagonais à sua frente");
        break;
    case "bispo":
        console.log("Anda pelas diagonais em relação a ele e captura nessas diagonais");
        break;
    case "cavalo":
        console.log("Movimenta-se em forma de um L em relação as suas diagonais, porém sem o meio do L");
        break;
    case "torre":
        console.log("Movimenta-se para frente, para trás e para os lados");
        break;
    case "rainha":
        console.log("Movimenta-se para frente, para trás, para os lados e pelas diagonais");
        break;
    case "rei":
        console.log("Movimenta-se para as casas ao redor dele");
        break;        
}        