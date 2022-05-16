const newNumber = () => { return Math.floor(Math.random() * 10)};

const sortition = (yourNumber, func) => {
  if (yourNumber === func()) {
    return 'Parabéns, você ganhou o prêmio de um milhão de espigas!!';
  } else {
    return 'Não foi hoje, mas continue gastando seu dinheiro aqui que quem sabe você ganha!!!!'
  }
}

console.log(sortition(3, newNumber));