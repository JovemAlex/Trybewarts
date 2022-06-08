// const inputEmail = document.querySelector('#input-email-login');
// const inputPassword = document.querySelector('#input-password');
// const loginSubmit = document.querySelector('#login-btn');
// function checkLogin(event) {
//   if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
//     return alert('Olá, Tryber!');
//   }
//   event.preventDefault();
//   return alert('Email ou senha inválidos.');
// }
// loginSubmit.addEventListener('click', checkLogin());

const inputEmail = document.querySelector('#input-email-login');
const inputPassword = document.querySelector('#input-password');
const loginSubmit = document.querySelector('#login-btn');
// const email = 'tryber@teste.com';
// const senha = '123456';
const btnCheck = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');

function login() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
loginSubmit.addEventListener('click', login);

function btn() {
  if (checkbox.checked === true) {
    btnCheck.disabled = false;
  }
}
checkbox.addEventListener('click', btn);
