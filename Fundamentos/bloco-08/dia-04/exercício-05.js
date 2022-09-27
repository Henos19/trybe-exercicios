const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(listOfNames) {
  // escreva seu código aqui
  return listOfNames.reduce((count, names) => {
    let amountOfAInTheName = 0;
    names.split('').forEach((letter) => {
      if (letter.toLowerCase() === 'a') {
        amountOfAInTheName += 1;
      }
    });
  return count + amountOfAInTheName;
  }, 0);
}

console.log(containsA(names));