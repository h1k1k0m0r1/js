//objeto
let pessoa = {
    firstname: 'Irmão do',
    lastname: 'Jorel',
    age: 10,
    cor_dos_olhos: 'preto',
    hobbies: ['musica', 'filmes', 'esportes'],
    endereco: {
        rua:'rua aracaju',
        numero: '0',
        cidade:'são paulo',
        estado:'SP',
    }
}

console.log(pessoa)
console.log(pessoa.firstname)
console.log(pessoa.lastname, pessoa.age)
console.log(pessoa.hobbies[1])
console.log(pessoa.endereco.cidade);

//atribuiição de desestrutarção IMPORTANTE!!!!!!
console.clear();
const {
    firstname,
    lastname,
    endereco: { cidade }, } = pessoa;
console.log(`${firstname} ${lastname} é de ${cidade}`);
/*Importante: Para a atribuição via desestruturação ocorrer corretamente em objetos, você
deve sempre usar os nomes das variáveis iguais as chaves que você deseja extrair. Caso
contrário o conteúdo será undefined. Sabia bem esse assunto, isso é muito utilizado em
JS.*/


//divisão 1.0


//atribuição via desestrturação com array;
console.clear()
const array = [1, 2, 3, 4, 5];// determian a quantidade de termos que pode ser colocados no meio do colchetes
let = [valor01, valor02, ...resto] =  array;
console.log(valor01);
console.log(valor02);
console.log(resto);

let [valorA, valorB, valorC, ...restante] = array;
console.log(valorA);
console.log(valorB);
console.log(valorC);
console.log(restante)
//aparece no console, 4,5 pois seriam os termos disponisveis ainda para preencehr no let exemplo "valorD e valor E"
//E verá que a variável restante irá armazenar o conteúdo a partir do quarto elemento até do final do array


/*---divisão 2.0---*/ console.clear()


//array de objetos
const tarefas = [ 
  /*0*/  {
        id: 1,
        texto: 'levar o lixo para fora',
        IsCompleted: true,
    },
  /*1*/  {
        id: 2,
        texto: 'Encontrar com  o chefe',
        IsCompleted: true,
    },
  /*2*/ {
        id: 3,//está declarando o valor de outra forma mas a contagem ainda esta sendo
        texto: 'Consulta no dentista',
        IsCompleted: false,
    },
];

console.log(tarefas);
console.log(tarefas[1].texto);
console.log(tarefas[2].id, tarefas[2].texto, tarefas[2].IsCompleted);


//--divisão 1.1--//


// tranformando array JSON
console.log(JSON.stringify(tarefas));

// JSON
const tarefa_JSON = '[{"id":1,"texto":"Levar o lixo para fora","isCompleted":true}, {"id":2,"texto":"Encontrar com o chefe","isCompleted":true},{"id":3,"texto":"Consulta no dentista","isCompleted":false}]';
const objeto = JSON.parse(tarefa_JSON);
console.clear();
console.log(objeto);