// Método querySelector
let paragrafo = document.querySelector('p');
paragrafo.style.background = '#FBBEBA';

// Busca a tag e a classe
let parclasse = (document.querySelector('p.exemplo').innerHTML = 'mudei o textoaha');

//busca somente classe
let elemento = (document.querySelector('.myclass').style.fontSize = 'X-large');

// Função chamada pelo evento onclick
const Clique = () => {
    document.querySelector('#my-span').style.backgroundColor = '#CEFBBA'
};

// Método querySelectorAll
let listaLi = document.querySelectorAll('li');

for ( i = 0; i < listaLi.length; i++) {
listaLi[i].style.border = '1px solid #0000FF';
listaLi[i].style.padding = '3px';
}
console.log(listaLi);

//busca por id
let myLi = document.querySelectorAll('#my-li');
myLi.forEach((li) => (li.innerHTML = 'mudou aqui!'));

//busca por classe
let myItem  =  document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.backgroundColor = '#E7BAFB'));

// Busca por elemento e classe
let myTeste = document.querySelectorAll('li.teste');
myTeste.forEach((elemento) => (elemento.style.color = '#FFF'));

