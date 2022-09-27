const stringObj = require('./service');

test('Verfica se randomNumber retorna um número', () => {
  const spy = jest.spyOn(stringObj, 'randomNumber').mockImplementation(() => 34);
  const getRandom = stringObj.randomNumber();
  console.log(getRandom);
  jest.restoreAllMocks();
  console.log(getRandom);
  
});

/* test('Altera a implementação da randomNumber', () => {
  const randomNumber = jest.fn().mockImplementation((a, b) => a / b);
  expect(randomNumber(10, 5)).toBe(2);
}); */

/* test('Altera a implementação da randomNumber mais uma vez', () => {
  let randomNumber = jest.fn().mockImplementation((a, b, c) => (a / b) * c);
  expect(randomNumber(10, 5, 5)).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toBeCalledWith(10, 5, 5);
  jest.resetAllMocks();
  randomNumber = jest.fn().mockImplementation(a => 2 * a);
  expect(randomNumber(2)).toBe(4);
}); */

/* test('Testa se o mock da função upperString está funcionando corretamente', () => {
  const upperString = jest.fn().mockImplementation(string => string.toLowerCase());
  console.log(upperString('geNTLEmAn'));
}); */
