const fetch = require('node-fetch');

function getTheValuesAndNames(info) {
  console.log('Cripto name and its price in dolars:\n')
  let count = 0;
  const formatedCriptoInfo = info.data.forEach(({ id, priceUsd }) => {
    count += 1;
    if (count < 10) console.log(`${id} is costing US$ ${parseFloat(priceUsd).toFixed(2).replace('.', ',')}`);
  });
}

function getTheCriptos() {
  const url = `https://api.coincap.io/v2/assets`;

  fetch(url)
    .then((response) => response.json())
    .then(getTheValuesAndNames);
}

getTheCriptos();