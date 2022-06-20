import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
        conteudos.map(({conteudo, status, bloco}) => 
        <p key={conteudo} className='Style'>
          O conteudo é: {conteudo}
          <br></br>
          Status: {status}
          <br></br>
          Bloco: {bloco}
        </p>
        )
      )
  }
}

export default Content;