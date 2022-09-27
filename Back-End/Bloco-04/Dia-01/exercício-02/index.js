const fs = require('fs');

const getFile = () => {
  const response = fs.readFileSync('simpsons.json', 'utf8');
  const data = JSON.parse(response);
  return data;
}

const newData = () => {
  const formatedData = getFile();
  formatedData.forEach(({ name }, index) => {
    if (name === 'Nelson Muntz') formatedData[index].name = 'Maggie Simpson';
  });
  
  fs.writeFileSync('./simpsonFamily.json', JSON.stringify(formatedData));
};

newData()

console.log(fs.readFileSync('simpsonFamily.json', 'utf8'))