const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');
const loginSubmit = document.querySelector('#login-btn');

loginSubmit.addEventListener('click', function loginCheck(event){
    
    if(inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456'){
        return alert('Olá, Tryber');
    }
    event.preventDefault();
    alert('Email ou senha inválidos');
})