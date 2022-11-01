//substituir string
let message = 'venha para a microsoft'
console.log(message);

let novaMensagem = message.replace('microsoft', 'IOS');
console.log(novaMensagem);

//remover espaços
console.clear();
let text = '          Ola Alunos IOS           ';
console.log(text.trim());

//método de busca string
console.clear();
let frase = 'Sou um aluno do IOS e o IOS é muito bom!';
console.log(frase.indexOf('IOS')); //returns 16
console.log(frase.lastIndexOf('IOS'));//returns 24

console.log(frase.search('IOS')); //returns 16

console.log|(frase.startsWith('S'));  //verdadeiro - retnorna true
console.log(frase.startsWith('Sou')); // Verdadeiro - retorna true
console.log(frase.startsWith('a')); // Falso - retorna false

console.log(frase.endsWith('!')); // Verdadeiro - retorna true
console.log(frase.endsWith('bom!')); // Verdadeiro - retorna true
console.log(frase.endsWith('x')); // Falso - retorna false
/*retnram como true or false se o valor for o que a variável pede*/ 

