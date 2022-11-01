/*const num = '5';

if ( num % 2 == 0 && !isNaN(num)) console.log('Número par!')
else if ( num % 2 != 0 && !isNaN(num)) console.log('Número impar!')
else console.log('não é um número!')

console.clear()

let resultado = 3 > 4 ? "sim" : "não";
console.log(resultado)

console.clear();    
let result = Math.PI < 4 ? console.log('Sim') : console.log('Não');
*/


//switch
console.clear()
const h = 11;
const cor = h > 10 ? 'vermelha' : 'azul';
console.clear()

switch (cor) {
    case 'vermelha':
        console.log('A cor é vermelha');
        break;

    case 'azul':
        console.log('A cor é azul');
        break;
    default:

        console.log('A cor não é nenhuma das duas');
        break;

}