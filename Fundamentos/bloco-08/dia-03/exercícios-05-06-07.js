const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function fantasyOrScienceFiction(listOfBooks) {
  // escreva seu código aqui
  return listOfBooks.filter(book => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
}

function fantasyOrScienceFictionAuthors(fantasyAndFictionBooks) {
  return fantasyAndFictionBooks.map(book => book.author.name).sort();
}

/* console.log(fantasyOrScienceFictionAuthors(fantasyOrScienceFiction(books))); */

function oldBooksOrdered(listOfBooks) {
  // escreva seu código aqui
  return listOfBooks.filter(book => 2022 - book.releaseYear > 60).sort((ele1, ele2) => ele1.releaseYear - ele2.releaseYear);
}

function oldBooks(oldestBooks) {
  return oldestBooks.map(book => book.name);
}

/* console.log(oldBooks(oldBooksOrdered(books))); */

function authorWith3DotsOnName(listOfBooks) {
  const getBook = listOfBooks.find(book => book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.');
  return getBook.name;
}

console.log(authorWith3DotsOnName(books));
