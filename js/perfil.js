document.getElementById('filePerfil').onchange = () => {
    leEAtualiza()
}


const leitorImagem = new FileReader(), previaDaImagem = document.getElementById('filePerfil');
function leEAtualiza() {
    let imagemEnviada = previaDaImagem.files[0];
    leitorImagem.readAsDataURL(imagemEnviada);
    leitorImagem.addEventListener('loadend', function (load) {
        document.getElementById('imgPerfil').style.backgroundImage = `url('${load.target.result}')`
    })
}



