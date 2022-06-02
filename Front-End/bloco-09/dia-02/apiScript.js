// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const jokeDiv = document.getElementById('jokeContainer');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then((response) => response.json())
  .then((info) => {
    jokeDiv.innerHTML = info.joke;
  });
};

window.onload = () => fetchJoke();