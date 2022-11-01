// JavaScript e DOM
// objeto document
console.log(document);

//acessar informações
console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

//alterar o titulo
document.title = 123;
//muda o titulo da pagina

//criar um elemento <h1>
let heading = document.createElement('h1');
heading.innerHTML = 'NOOO WHAT ON THE WORLD, HOW DO U OWN DISORDEEER';
document.body.appendChild(heading);
heading.style.borderBottom = 'solid 3px #000';