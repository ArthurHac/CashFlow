

const button = document.getElementById('btn_login')
const email = document.getElementsByName('email')[0]
const senha = document.getElementsByName('senha')[0]
let campoLogin = document.querySelectorAll('#form input')

// cadastrando com form-cadastro
const buttonCadastros = document.getElementById('form_cadastro').onsubmit = (e) => {
    e.preventDefault()
    const campoCadastro = document.querySelectorAll('#form_cadastro input')
    let confirm_email = false
    let confirm_senha = false
    let confirm_campo = false

    if (campoCadastro[2].value == campoCadastro[3].value) {
        document.querySelector('#DOM_erro label').textContent = ""
        confirm_senha = true
    }

    if (campoCadastro[4].value == campoCadastro[5].value) {
        document.querySelector('#DOM_erro label').textContent = ""
        confirm_email = true
    }

    if (confirm_email && confirm_senha) {
        confirm_campo = true
    }

    if (confirm_campo) {
        const obj = {
            nome: campoCadastro[0].value,
            senha: campoCadastro[2].value,
            email: campoCadastro[4].value,
            infoUsuario: [],
            produto: [],
            fornecedor: [],
            categoria: [],
            despesa: [],
            ValorVendido: 0

        }
        localStorage.setItem(campoCadastro[4].value, JSON.stringify(obj))
        location.href = "html/perfil.html"
        sessionStorage.setItem(0, campoCadastro[4].value)
        console.log(campoCadastro[4].value)
    } else {
        document.querySelector('#DOM_erro label').textContent = "Verifique os dados"
    }
}

// logando com dados no locakStorage


const buttonLogin = document.getElementById('form').onsubmit = (e) => {
    e.preventDefault()
    if (localStorage.getItem(campoLogin[0].value) != null) {
        const dadosSenha = JSON.parse(localStorage.getItem(campoLogin[0].value)).senha
        if (dadosSenha == campoLogin[1].value) {
            console.log('show')
            console.log(localStorage.getItem(campoLogin[0].value))
            sessionStorage.setItem(0, campoLogin[0].value)
            location.href = "html/dashboard.html"
        } else {
            document.getElementById('click').click()
        }
    } else {
        console.log("sem retorno")
        document.getElementById('click').click()
    }
}

document.getElementById('btn_login').onclick = buttonLogin
document.getElementById('button_submit').onclick = buttonCadastros

