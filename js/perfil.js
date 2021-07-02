document.getElementById('filePerfil').onchange = () => {
    leEAtualiza()
}


const leitorImagem = new FileReader(), previaDaImagem = document.getElementById('filePerfil');
function leEAtualiza() {
    let imagemEnviada = previaDaImagem.files[0];
    leitorImagem.readAsDataURL(imagemEnviada);
    leitorImagem.addEventListener('loadend', function (load) {
        document.getElementById('imgPerfil').style.backgroundImage = `url('${load.target.result}')`
        window.imgPerfil = load.target.result
    })

    
}


function campoPerfil() {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    document.getElementById('NomePerfil').value = dados.nome
    document.getElementById('EmailPerfil').value = dados.email
    document.getElementById('ConfirmaEmailPerfil').value = dados.email

}

function informacaoAdicional() {
    if (document.getElementById('cpfPerfil').value != "" &&
        document.getElementById('idadePerfil').value != "" &&
        document.getElementById('contatoPerfil').value != "" &&
        document.getElementById('nacionalidadePerfil').value != "" &&
        document.getElementById('enderecoPerfil').value != "" &&
        document.getElementById('categoriaPerfil').value != "" &&
        document.getElementById('sexoPerfil').value != "" 
    ) {
        let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
        let infoUser = {
            ftoPerfil: window.imgPerfil,
            cpj: document.getElementById('cpfPerfil').value,
            idade: document.getElementById('idadePerfil').value,
            contato: document.getElementById('contatoPerfil').value,
            nacionalidade: document.getElementById('nacionalidadePerfil').value,
            endereco: document.getElementById('enderecoPerfil').value,
            categoria: document.getElementById('categoriaPerfil').value,
            sexo: document.getElementById('sexoPerfil').value,
        }
        dados.infoUsuario = infoUser;
        localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dados))
        location.href = "dashboard.html"
    }else{
        document.getElementById('modalIncompleto').click();
    }
}


window.onload = () => {
    campoPerfil()
}