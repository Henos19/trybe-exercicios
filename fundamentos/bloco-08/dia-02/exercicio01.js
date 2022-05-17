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

const findRelease = (listOfBooks, birth) => {
  return listOfBooks.find((element) => element.author.birthYear === birth ).author.name;
}

console.log(findRelease(books, 1947));

const smallerName = (listOfBooks) => {
  let smallerBookName = '';
  let maxSize = 100;
  listOfBooks.forEach((element) => {
    if (element.name.length < maxSize) {
      maxSize = element.name.length;
      smallerBookName = element.name;
    }
  });
  return smallerBookName;
}

console.log(smallerName(books));

const find26CharactersBook = (listOfBooks) => {
  return listOfBooks.find((element) => element.name.length === 26).name;
}

console.log(find26CharactersBook(books));

function sortTheBooks(listOfBooks) {
  return listOfBooks.sort((ele1, ele2) => ele2.releaseYear - ele1.releaseYear );
}

/* console.log(sortTheBooks(books)); */

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((element) => element.author.birthYear > 1900 && element.author.birthYear < 2000);
}

console.log(everyoneWasBornOnSecXX());

console.log(books.some((element) => element.releaseYear > 1980 && element.releaseYear < 1990));

const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  return books.every((element1) => {
    !books.some((element2) => {
      element1.author.birthYear === element2.author.birthYear && element1.author != element2.author;
    });
  });
}

console.log(authorUnique());
