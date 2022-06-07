const inputEmail = document.querySelector('#input-email-login');
const inputPassword = document.querySelector('#input-password');
const loginSubmit = document.querySelector('#login-btn');
function checkLogin(event) {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    return alert('Olá, Tryber!');
  }
  event.preventDefault();
  return alert('Email ou senha inválidos.');
}

loginSubmit.addEventListener('click', checkLogin());
