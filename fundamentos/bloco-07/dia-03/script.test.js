const {sum} = require('./script');

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