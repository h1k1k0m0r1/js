let valor01 = 100;
const valor02 = 5;
console.log('A multiplicação de ' + valor01 +' por ' + valor02 + ' é ' + valor01 * valor02 );
console.log(`A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02} `);

//metodo de stirng//
console.clear();
const string01 = 'instituto de oportunide social';

//acessando o primeiro caractere//
console.log(string01.charAt(0));
console.log(string01[0]);

//acessando o decimo primeiro caractere
console.log(string01.charAt(10));
console.log(string01[10]);

//tamanho de string

/**/console.clear();
let texto   = 'abcdefehijklmnopqrstuvxwyz';

console.log(texto.length);

const texto2 = 'também 123 [] é uma string 231 -1/n';
console.log(texto2.length);


/*console.clear()*/

const s = 'Hello World!';

console.log(s.toUpperCase());
console.log(s.toLowerCase());
//-----------------------


console.clear();
const stri = 'kondzilla';

console.log(stri.substring(1, 3));
//saída esperada on

console.log(stri.substring(2));
//saída esperada ndzilla



const str1 = 'a raposa é um animal esperto';

const palavras = str1.split(' ');
console.log(palavras[3]);
//saída esperada "um

const chars = str1.split( '' );
//aqui é o comando A com aspas sem espaço entre elas

console.log(chars[7])
//saída esperada "a"

const strCopy = str1.split();
console.log(strCopy);
//saída esperada: array ["A raposa  é um animal esperto"]



