const elementosPai = document.getElementById('pai').children
const priFilho = document.getElementById('primeiroFilho')

for (let index = 0; index < elementosPai.length; index += 1) {
    if (elementosPai[index] === priFilho){
        elementosPai.remove('')
    }
}