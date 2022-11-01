/*

//array unidiminesional
// podemos criar array assim
const num1 = new Array(30, -1, 5, 3, 121);
//ou podemos fazer
const num2 = [-2, 40, 16, 111, 33, 64];

console.log(num1);
console.log(num2);

//acessando elementos diversos dos arrays
console.log(`primeiro elemento de num1 : ${num1[0]}`);
console.log(`primeiro elemento de num2 : ${num2[0]}`);

//acessando elemento diversos arrays
console.log(`terceiro elmento de num1 : ${num1[2]}`);
console.log(`quinto elemento de num2 : ${num2[5]}`);    




console.clear();
//array bidiminesional
const matrix = [
    ['Banana', 'Maçã', 'Pêra'], 
    ['Laranja', true, 1], 
    [null, 'Uva', -350],
];
//Acessando elementos diversos dos arrays
console.log(`acessando a primera linha: \n ${matrix[0]}`);
console.log(`acessando o segundo elemento: ${matrix[0][1]}`); 
//alterando o valor array




console.clear();
let moedas = ['real' ,'dolar', 'coroa', 'peso'];

console.log(`antes: ${moedas}`);

moedas[2] = 'yen';
console.log(`Depois: ${moedas}`);

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log('Antes:');
console.log(matrix1);
//--------alterando um valor do array
console.clear();
matrix1[0][2] = -10;
console.log('Depois:');
console.log(matrix1);


//--



console.clear();
let numArray = [1, 2, 3, 4];
console.log(typeof numArray);

let numArray2 = numArray.toString();
console.log(typeof numArray2);
//elemetnoi join ele é um "toString com capacidade de separar em elementos "seperados"
let teste1 = [0, 1, 2, 3, 4, 5];
let teste2 = teste1.join(' ata ');
console.log(teste2);
console.log(typeof teste2);

console.clear();
//tamanho de array contaa quantidade de termos dentro
let array = [0, 1, 2, 3, 4];
console.log(array.length)



//-- 



//remover e inserir elemnentos na arrray
//pop ()
const frutas1 =  ['Banana', 'Laranja', 'Maçã', 'Manga'];
let x = frutas1.pop(); //x = manga pois a variavél x puxa o ultimo elemento
console.log(frutas1);
console.log(x);

//push pagina 90
const frutas2 = ['Banana', 'laranja', 'Maçã', 'Manga'];
let y = frutas2.push('Kiwi'); //y=5 POIS ADIOCIONARA AO FINAL
console.log(frutas2);
console.log(y)

//unshift()
const frutas4 = ['Banana', 'Laranja'];
let w = frutas4.unshift('Kiwi'); //w consequentemente será = 3(quanitdade de termos), mas o termo kiwi será introduzido no começo
console.log(frutas4);
console.log(w);



//---


*/
//delete, esvazia o termo com o nome "empty" com a contagem 0,1,2,3...
console.clear();
const frutas5 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
delete frutas5[2];
console.log(frutas5);
