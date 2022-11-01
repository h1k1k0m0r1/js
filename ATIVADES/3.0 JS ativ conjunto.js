//estrutra condicional 
const e = '10';
if ( e === 10) console.log('e é o numeral 10');

else {
     console.log(`Resultado da condição: ${e === 10}`);
     console.log(`é não é o numeral`);
}
//----------------------------------------------------------------------    
console.clear()
const f = 4;
const g = 11;

if (f > 5  || g > 10) {
    console.log(`condição é ${f > 5 || g > 10}`);
    console.log('f é maior do que 5 ou g é maior do 10');
} else console.log('f não é maior do que 5 e g não é maior que 10');

if (f > 5 && g > 10) console.log('f é maior que 5 e g maior que 10');
else {
    console.log(`condição e ${f > 5 && g > 10}`)
    console.log(' f não é maior do que 5 e g não é maior que 10');
}