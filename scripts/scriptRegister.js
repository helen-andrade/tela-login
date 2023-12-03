function save() {

    const newName = document.getElementById("new-name").value
    const newEmail = document.getElementById("new-email").value
    const newPassword = document.getElementById("new-password").value
    const newNumber = document.getElementById("new-number").value
    const newNumberMinLength = 11
    const newPasswordMinLength = 8
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (newName === '' || newEmail === '' || newPassword === '' || newNumber === '') {
        alert('Por favor, preencha todos os campos.')
        return
    }

    if (newNumber.length < newNumberMinLength) {
        alert('Número inválido! Lembre-se de adicionar o DDD e não usar espaços ou símbolos.')
        return
    }
      
    if ( !regex.test(newEmail)) {
        alert('Esse formato de email não é permitido.')
        return
    }
      
    if (newPassword.length < newPasswordMinLength) {
          alert(`A senha deve ter pelo menos ${newPasswordMinLength} caracteres.`);
      } else {
            alert("Cadastro efetuado com sucesso!!!")
            window.location.href = 'index.html'
    }

    form.addEventListener('save', function (event) {
        event.preventDefault();
    })
}
      
