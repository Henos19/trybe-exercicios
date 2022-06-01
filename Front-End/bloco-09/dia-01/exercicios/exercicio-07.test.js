const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Testando a função uppercase', () => {
  it('Teste 01', (done) => {
    const palavraMaiuscula = 'PALAVRA';

    uppercase('palavra', (para) => {
      try {
        expect(para).toBe(palavraMaiuscula);
        done();
      } catch (e) {
        done(e);
      }
    })
  });
})