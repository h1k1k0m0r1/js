//metodo queryselcetor
const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Busca pelos elementos do Formulário
const myForm = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const horario = document.querySelector('#horario');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const userList = document.querySelector('#users');

// Método addEventListener
function onSubmit(e) {
    e.preventDefault()
    //console.log(nameInput.value);

if (nameInput.value === '' || emailInput.value === '') {

    //alert('por favor preencha os dados');
    msg.classList.add('error');
    msg.innerHTML = 'por favor preencha os dados.';
    setTimeout(() =>msg.remove(),3000); 

} else {
    //console.log ('success');
    const li =  document.createElement('li');
    li.appendChild(
        document.createTextNode (`${nameInput.value} : ${emailInput.value} : ${horario.value}`)
    
    );
    userList.appendChild(li);

//limpa formulario;
    nameInput.value = '';
    emailInput.value = '';
    horario.getElementsByTagName('option')[0].selected = 'selected';
    nameInput.focus(); //coloca o foco no elemento
    }
};

//validando e-mail
emailInput.addEventListener('change', (e) => {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(emailInput.value)) {
    // alert('Por favor, insira um e-mail válido.');
    msg_email.classList.add('error');
    msg_email.innerHTML = 'por favor, insira um email valido.';
    setTimeout(() => msg.remove(), 3000);
}});
