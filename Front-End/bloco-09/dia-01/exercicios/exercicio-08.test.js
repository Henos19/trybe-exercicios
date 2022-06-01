// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercicio-08.js');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', () => {
    // Escreva aqui seu código
    const getError = new Error('Não temos esse pokémon para você :(');

    function testandoOErro(erro, message) {
      expect(erro).toEqual(getError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Shey-Long', testandoOErro)
  });

  it('retorna um pokemon que existe no banco de dados', () => {
    // Escreva aqui seu código
    
  });
});