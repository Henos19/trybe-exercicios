const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('Você não digitou um número!');
  }
  return a + b;
};

module.exports = {sum};