const readLine = require('readline-sync');

const ibmCalculator = (weight, height) => {
  const ibmValue = (weight / height ** 2).toFixed(2);
  let ibmCategory = '';

  if (ibmValue < 18.5) ibmCategory = 'Abaixo do peso'
  else if (ibmValue >= 18.5 && ibmValue <= 24.9) ibmCategory = 'Peso Normal';
  else if (ibmValue > 24.9 && ibmValue <= 29.9) ibmCategory = 'Acima do Peso';
  else if (ibmValue > 29.9 && ibmValue <= 34.9) ibmCategory = 'Obesidade I';
  else if (ibmValue > 34.9 && ibmValue <= 39.9) ibmCategory = 'Obesidade II';
  else ibmCategory = 'Obesidade III ou IV';

  return {ibmValue, ibmCategory}; 
};

const weight = readLine.questionInt('Qual o seu peso em quilogramas? ');
const height = readLine.questionFloat('Qual a sua altura em metros? ');

const { ibmValue, ibmCategory } = ibmCalculator(weight, height);

console.log(ibmValue, ibmCategory);