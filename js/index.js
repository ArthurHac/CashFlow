// // reCHAPT
// function onSubmit(token) {
//     document.getElementById("demo-form").submit();
//   }

// selecionando o form-login

const button = document.getElementById('btn_login')
const email = document.getElementsByName('email')[0]
const senha = document.getElementsByName('senha')[0]
let campoLogin = document.querySelectorAll('#form input')

// cadastrando com form-cadastro
const buttonCadastros = document.getElementById('form_cadastro').onsubmit = (e) => {
    e.preventDefault()
    const campoCadastro = document.querySelectorAll('#form_cadastro input')
    let confirm_campo = false
    if(campoCadastro[2].value != campoCadastro[3].value){
        document.querySelector('#DOM_erro label').textContent = "senha incorreta"
    }else {
        document.querySelector('#DOM_erro label').textContent = ""
        confirm_campo = true
    }

    if(campoCadastro[4].value != campoCadastro[5].value){
        document.querySelector('#DOM_erro label').textContent = "Emails diferentes"
    }else {
        document.querySelector('#DOM_erro label').textContent = ""
        confirm_campo = true
    }

    if(confirm_campo){
        const obj = {
            nome: campoCadastro[0].value,
            senha: campoCadastro[2].value,
            email: campoCadastro[4].value,
            produto: {},
            fornecedor: {},
            categoria: {}
        }
        localStorage.setItem(campoCadastro[4].value, JSON.stringify(obj))
        location.href = "html/dashboard.html"
        sessionStorage.setItem(campoLogin[0].value,localStorage.getItem(campoLogin[0].value))
    }else{
        document.querySelector('#DOM_erro label').textContent = "Valores incorretos"
    }
}

// logando com dados no locakStorage



const buttonLogin = document.getElementById('form').onsubmit = (e) => {
    e.preventDefault()
    if(localStorage.getItem(campoLogin[0].value) != null){
        const dadosSenha = JSON.parse(localStorage.getItem(campoLogin[0].value)).senha
        if(dadosSenha == campoLogin[1].value){
            console.log('show')
            sessionStorage.setItem(campoLogin[0].value,localStorage.getItem(campoLogin[0].value))
            location.href = "html/dashboard.html"
        }else{
            document.getElementById('click').click()
        }
    }else {
        console.log("sem retorno")
    }
}

document.getElementById('btn_login').onchange = buttonLogin
document.getElementById('button_submit').onchange = buttonCadastros

