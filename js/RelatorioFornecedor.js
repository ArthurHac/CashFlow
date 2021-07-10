function relatorioFornecedor() {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    let text = ''
    for (i = 1; i < dados.fornecedor.length; i++) {
        text = text + `
        <tr>
        <th scope="row">${dados.fornecedor[i].nomeFant}</th>
        <td>${dados.fornecedor[i].cont}</td>
        <td>${dados.fornecedor[i].cnpj}</td>
        <td>${dados.fornecedor[i].cp}</td>
        <td>${dados.fornecedor[i].mail}</td>
        
        </tr>`
    }

    document.getElementById('DownloadFornecedor').innerHTML = text
}


window.onload = () => {
    relatorioFornecedor()
}