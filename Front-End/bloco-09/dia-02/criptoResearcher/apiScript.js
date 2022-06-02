const list = document.getElementById('criptoList');

function getTheValuesAndNames(info) {
  const formatedCriptoInfo = info.data.map(({ id, symbol, priceUsd }) => `${id.toUpperCase()}(${symbol}) is costing US$ ${parseFloat(priceUsd).toFixed(2).replace('.', ',')}`);
  return formatedCriptoInfo.slice(0, 10);
}

function addInfo(criptoInfo) {
  criptoInfo.forEach(info => {
    const newInfo = document.createElement('li');
    newInfo.style.margin = '5px'
    newInfo.style.fontSize = '25px'
    newInfo.innerHTML = info;
    list.appendChild(newInfo);
  })
}

function getTheCriptos() {
  const url = `https://api.coincap.io/v2/assets`;

  fetch(url)
    .then((response) => response.json())
    .then(getTheValuesAndNames)
    .then(addInfo)
    .catch((error) => console.log(error))
}

getTheCriptos();