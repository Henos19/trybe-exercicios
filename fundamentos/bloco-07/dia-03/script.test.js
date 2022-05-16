const {sum, myRemove, myFizzBuzz} = require('./script');

describe('Testes da função sum', () => {
  it('A soma de 4 mais 5 é 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('A soma de 0 mais 0 é zero', () => {
    expect(sum(0,0)).toBeFalsy();
  });
  it('a ou b não são números', () => {
    expect(() => {sum(4,'5')}).toThrow('Você não digitou um número');
  });
});

describe('Teste da função myRemove', () => {
  it('Verifica se myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Teste da função myFizzBuzz', () => {
  it('Verifica se um número divisível por 3 e 5 retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Verifica se um número divisível por 3 retorna o valor esperado', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it('Verifica se um número divisível por 5 retorna o valor esperado', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });
  it('Verifica se um número que não é divisível por 3 ou 5 retorna o valor esperado', () => {
    expect(myFizzBuzz(28)).toBe(28);
  });
  it('Verifica se um parâmetro não numérico retorna o valor esperado', () => {
    expect(myFizzBuzz('15')).toBeFalsy();
  });
});