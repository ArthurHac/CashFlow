function relatorioEstoque() {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    let text = ''
    for(i = 1; i < dados.produto.length; i++){
        text = text + `
        <tr>
        <th scope="row">${dados.produto[i].nome}</th>
        <td>${dados.produto[i].categoria}</td>
        <td>${dados.produto[i].codEAN}</td>
        <td>R$ ${dados.produto[i].preco}</td>
        <td>${dados.produto[i].quantidade}</td>
        </tr>` 
    }

    document.getElementById('DownloadEstoque').innerHTML = text
}


window.onload = () => {
    relatorioEstoque()
}