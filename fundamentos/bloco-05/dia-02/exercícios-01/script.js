let ele1 = document.getElementById('elementoOndeVoceEsta');
ele1.parentElement.style.backgroundColor = "green";

ele1.firstElementChild.innerHTML = "Oi! Eu estou aqui, mundo!";

let pai = document.getElementById("pai")
pai.firstElementChild.innerHTML = "Opa, só estou testando!"

ele1.parentNode.firstElementChild.style.backgroundColor = "blue"

ele1.nextSibling
/* Não entendi a razão do nextSibling não alterar a cor de atenção. Outra coisa, quando tento adicionar algo novo uso o ele1.nextSibling, este de alguma forma atrapalha ele1.nexElementSibling */
ele1.nextElementSibling.innerHTML = "Testando aqui também"

ele1.parentNode.children[2].style.backgroundColor = "yellow"