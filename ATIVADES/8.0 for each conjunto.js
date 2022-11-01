
console.clear();
const tarefas = [
{
id: 1,
texto: 'Levar o lixo para fora',
isCompleted: true,
},
{
id: 2,
texto: 'Encontrar com o chefe',
isCompleted: true,
},
{
id: 3,
texto: 'Consulta no dentista',
isCompleted: false,
},
];


//metodo map()
const numeros = [4, 9, 16, 25]
const newArray = numeros.map(Math.sqrt);
console.clear;
console.log('numeros');
console.log(numeros);
console.log('newArray');
console.log(newArray);


//--divisão 1.0


// outro exemplo de map
console.clear();

const mapText = tarefas.map((valor) => {
    return valor.texto;
});
//imprime um novo array
console.log(mapText);



//--divisão 2.0


//metodo filter
console.clear();
const age = [32, 33, 16, 40];

let filtro_age  = age.filter((idade) => {
    return idade >= 18;
});
console.log(filtro_age);

//outro exemplo de filter 
console.clear();
const filtrocompletas = tarefas.filter((item) => {
    return item.isCompleted === true;
});

console.log(filtrocompletas)


//--divisão 3.0
const frutas = ['apple', 'orange', 'cherry'];
frutas.forEach(minhafunção);

function minhafunção(item, index) {
    console.log(`indice: ${index}`)
    console.log(`elemento: ${item}`)
};

console.clear();
const meuarray = [
    {nome: 'apple', qunatidade: 2},
    {nome: 'orange', qunatidade: 0},
    {nome: 'cherry', qunatidade: 5},
];

console.log(
    meuarray.find((frutas) => {
        return frutas.nome = 'cereja'
    })
);