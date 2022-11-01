//funções
function addNums(num1, num2 = 1) {
    return num1 + num2; 
}

let x = addNums(4, 5); 
console.log(x); //chamada da função addnums

//a ordem foi trocada para poder compreender que é alem da ordem e sijm a especfiicação do comando

let z = myFunc(5, 5); //chamada da funções myFunc
console.log(z)

function myFunc(num1, num2) {
return num1 * num2
}

//arrow function   
const hello = () => {
    return 'Olá Arrow function!';
};
console.log(hello);//retrona o objeto função
console.log(hello()); //executa função e imprime stringng return

const addNums2 = (num1 = 1, num2 = 1) => {
    return num1 + num2;
};

let adição = addNums2(5,10);
console.log(adição)



//--divisão 0.1



console.clear();

let marca = 'fiat';
const carrao = {
    type: 'fiat',
    model: '500',
    color: 'white',
};

const pessoa = {
    firstname: 'juam',
    lastname: 'doe',
    age: '50',
    eyecolor: 'blue',
}