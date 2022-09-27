const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(matrix) {
  // escreva seu código aqui
  return matrix.reduce((acc, element) => {
    return acc.concat(element);
  }, []);
}

console.log(flatten(arrays));
