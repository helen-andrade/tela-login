function startLogin() {
  const form = document.getElementById('main-login')
  const user = document.getElementById('user').value
  const password = document.getElementById('password').value 
  const passwordMinLength = 8
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if (user.trim() === '' && password.trim() === '') {
  alert('Por favor, preencha o campo de usuário e senha.')
  return;
}

if (user.trim() === '') {
  alert('Por favor, preencha o campo de usuário.')
  return
}

if (password.trim() === '') {
  alert('Por favor, preencha o campo de senha.')
  return
}

if (user.trim() === '' || !regex.test(user)) {
  alert('Email inválido! Por favor, insira um email válido.')
  return;
}

if (password.length < passwordMinLength) {
    alert(`A senha deve ter pelo menos ${passwordMinLength} caracteres.`);
} else {
  window.location.href = 'index2.html'
}

form.addEventListener('startLogin', function (event) {
    event.preventDefault();
  })
}

function newRegister() {
  window.location.href = 'newRegister.html'
}

