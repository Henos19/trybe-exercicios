const pai = document.getElementById('pai');
const OutroNome = document.createElement('section');
OutroNome.id = 'OutroNome';

pai.appendChild(OutroNome);
document.getElementById('OutroNome').innerHTML = "Testando o primeiro requisito!!";

const elem1 = document.getElementById('elementoOndeVoceEsta');
const filhoElem1 = document.createElement('p');
filhoElem1.id = 'filhoElem1';

elem1.appendChild(filhoElem1);

document.getElementById('filhoElem1').innerText = 'Testando o segundo requisito!!';

const terceiroFilho = document.createElement('div');
const primeiroFilho = elem1.firstElementChild

primeiroFilho.appendChild(terceiroFilho)

terceiroFilho.innerHTML = 'Testando agora o terceiro requisito!!!!'


terceiroFilho.parentElement.nextElementSibling.innerHTML = 'Último requisito, o requisito 4. Ufa, deu certo!!!!'