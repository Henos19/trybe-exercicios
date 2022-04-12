let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Bem vinda, ' + info.personagem);

info.recorrente = 'Sim';
console.log(info.recorrente);

for (let properties in info){
	console.log(properties);
}
console.log('');

for (let values in info){
	console.log(info[values]);
}

let info2 = {
  personagem: 'Tio patinhas',
  origem: 'Christmas on Bear Mountain, Dell"s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

console.log('');

for (let values2 in info) {
	if(values2 !== 'recorrente') {
		console.log(info[values2] + ' e ' + info2[values2]);;
	}
	else {
		console.log('Ambos recorrentes')
	}
}
