// selecionando o form

const button = document.getElementById('btn_login')
const email = document.getElementsByName('email')[0]
const senha = document.getElementsByName('senha')[0]

document.getElementById('form').onsubmit = () => {

    if (email.value == '' && senha.value == '') {
        return false
    } else {
        if (email.value == 'arthurhenrique.up@gmail.com' && senha.value == '1234') {
            return true
        } else {
            document.getElementById('click').click()
        }
    }

    return false
}

    


