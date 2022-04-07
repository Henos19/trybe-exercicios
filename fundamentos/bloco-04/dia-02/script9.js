let myArray = [];
let result = [];

for (i = 1 ; i < 26 ; i += 1){   
    myArray.push(i);
}
for (let num of myArray){
    result.push(num/2); 
}
console.log(result);