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

document.getElementById('categoriaPerfilButton').onclick = () => {
    document.getElementById('modalcategoria').click()
}

function adicionarCategoria() {
    if (document.getElementById('CampoAdicionarCategoria').value != "") {
        let categoria = document.getElementById('CampoAdicionarCategoria').value
        let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
        dados.categoria.push(categoria)
        localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dados))
        document.getElementById('CampoAdicionarCategoria').value = ""
        let text = ''
        for (i = 0; i < dados.categoria.length; i++) {
            text = text + `
            <div class="option"> ${dados.categoria[i]}<button id="excluirCategoria"><i class="fas fa-times-circle" style="float: right ;padding: 4px"></i></button></div>
            `
        }

        document.getElementById('selectCategorias').innerHTML = text
    }


    itemCategoriaPrincipal()

}

function itemCategoriaPrincipal() {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    let html = document.getElementById('selectCategorias').innerHTML = ""
    let txt = '<option value="">Insira a Categoria --</option>'

    for (i = 0; i < dados.categoria.length; i++) {
        txt = txt + `
        <option value="${dados.categoria[i]}">${dados.categoria[i]}</option>
        `
    }

    html.innerHTML = txt

    let text = ''
    for (i = 0; i < dados.categoria.length; i++) {
        text = text + `
        <div class="option"> ${dados.categoria[i]}<button onclick="excluirCategoria('${dados.categoria[i]}')" style="float: right;  border: none; background-color: white;"><i class="fas fa-times-circle" ></i></button></div>
        `
    }

    document.getElementById('categoriaPerfil').innerHTML = txt
    document.getElementById('selectCategorias').innerHTML = text
    document.getElementById('CampoAdicionarCategoria').value = ""

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
            renda: document.getElementById('rendaPerfil').value
        }
        dados.infoUsuario = infoUser;
        localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dados))
        location.href = "dashboard.html"
    } else {
        document.getElementById('modalIncompleto').click();
    }
}

function excluirCategoria(categoria) {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    let index = dados.categoria.indexOf(categoria)
    dados.categoria.splice(index, 1)
    localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dados))

    itemCategoriaPrincipal()

}


window.onload = () => {
    campoPerfil()
    adicionarCategoria()
    itemCategoriaPrincipal()
}


/* Mascara CPF */

function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}

function fMascEx() {
    obj.value = masc(obj.value)
}

function mCPF(cpfPerfil) {
    cpfPerfil = cpfPerfil.replace(/\D/g, "")
    cpfPerfil = cpfPerfil.replace(/(\d{3})(\d)/, "$1.$2")
    cpfPerfil = cpfPerfil.replace(/(\d{3})(\d)/, "$1.$2")
    cpfPerfil = cpfPerfil.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpfPerfil
}



/* Mascara Telefone */

function mascara(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmascara()", 1)
}
function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}
function mtel(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    return v;
}
function id(el) {
    return document.getElementById(el);
}
window.onload = function () {
    id('contatoPerfil').onkeyup = function () {
        mascara(this, mtel);
    }
}