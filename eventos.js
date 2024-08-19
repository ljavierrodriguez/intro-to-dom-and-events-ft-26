let name = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let confirm_password = document.querySelector('#confirm_password')

name.addEventListener('keyup', (e) => {
    if (e.target.value === "") {
        btnRegister.classList.add('disabled')
    } else {
        btnRegister.classList.remove('disabled')
    }
})

email.addEventListener('keyup', (e) => {
    if (e.target.value === "") {
        btnRegister.classList.add('disabled')
    } else {
        btnRegister.classList.remove('disabled')
    }
})

password.addEventListener('keyup', (e) => {
    if (e.target.value === "") {
        btnRegister.classList.add('disabled')
    } else {
        btnRegister.classList.remove('disabled')
    }
})

confirm_password.addEventListener('keyup', (e) => {
    if (e.target.value === "") {
        btnRegister.classList.add('disabled')
    } else {
        btnRegister.classList.remove('disabled')
    }
})

function validar(evento) {
    evento.preventDefault()
    console.log("Procesando Formulario")
    console.log(evento)
    let hasError = false
    let fbName = document.querySelector('#name + .invalid-feedback')
    let fbPass = document.querySelector('#confirm_password + .invalid-feedback')
    let fbConfPass = document.querySelector('#confirm_password + .invalid-feedback')

    let validName = /^[a-zA-Z]+$/
    let validUsername = /^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$/
    /* let email = document.querySelector('#email')
    console.log(evento.target.username.value)
    console.log(username.value) */

    if (name.value === "") {
        name.classList.add('is-invalid')
        hasError = true
    } else if (!validName.test(name.value)) {
        name.classList.add('is-invalid')
        fbName.innerHTML = "the field name must contain only letters"
        hasError = true
    } else {
        name.classList.remove('is-invalid')
    }

    if (email.value === "") {
        email.classList.add('is-invalid')
        hasError = true
    } else {
        email.classList.remove('is-invalid')
    }

    if (password.value === "") {
        password.classList.add('is-invalid')
        fbPass.innerHTML = "The field password is required"
        hasError = true
    } else {
        password.classList.remove('is-invalid')
    }

    if (confirm_password.value === "") {
        confirm_password.classList.add('is-invalid')
        fbConfPass.innerHTML = "The field confirm password is required"
        hasError = true
    } else if (password.value !== confirm_password.value) {
        password.classList.add('is-invalid')
        confirm_password.classList.add('is-invalid')        
        fbPass.innerHTML = ""
        fbConfPass.innerHTML = "password and confirm password must be equals"
        hasError = true
    } else {
        password.classList.remove('is-invalid')
        confirm_password.classList.remove('is-invalid')
    }

    if (hasError) {
        btnRegister.classList.add('disabled')
    } else {
        btnRegister.classList.remove('disabled')
        btnRegister.innerHTML = `
        <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
        </div> &nbsp;
        Enviando...
        `
        btnRegister.classList.add('disabled')
        //evento.target.submit()
    }
}

let registerForm = document.querySelector('#registerForm')
registerForm.addEventListener('submit', validar)