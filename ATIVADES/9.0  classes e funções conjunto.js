/*
//class 
class carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}

// intaciando objetios à classe
let meu_carro1 = new carro('ford',2014);
let meu_carro2 = new carro('audi',2019);

//imprimir valores
console.log(meu_carro1.nome);
console.log(meu_carro1.ano);

console.log(meu_carro2.nome);
console.log(meu_carro2.ano);


//--divisão 1.0


console.clear()
class novocarro {
    contructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    idade(ano) {
        return ano - this.ano;
    }
}

//buscando o ano atual automaticamente
let datahoje = new Date();
let ano = datahoje.getFullYear();

//console.log(datahoje);

// Intanciando o objeto à classe

let meunovocarro = new novocarro('Ford', 2014);

console.log(meunovocarro.idade(ano));



//divisão 2.0

*/


//obs parei no final devido exaustão
//+ exemplos
console.clear();
class classepessoa {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }
    getbirthyear() {
        return this.dob.getFullYear();
    }

    getFullname() {
        return `${this.firstname} ${this.lastname}`;
    }
};

//initiate object
const pessoa1 = new classepessoa('john','doe','1980-04-03');
const pessoa2 = new classepessoa('marry','smith','1970-06-13');

console.log(pessoa1);

console.log(pessoa2.getbirthyear());
console.log(pessoa2.dob.getFullYear());

console.log(pessoa1.getFullname());