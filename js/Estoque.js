function perfil() {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    document.getElementById('ftoPerfilid').style.backgroundImage = `url('${dados.infoUsuario.ftoPerfil}')`
    document.getElementById('ftoPerfilidside').style.backgroundImage = `url('${dados.infoUsuario.ftoPerfil}')`
}

document.getElementById('ftoPerfilid').onclick = () => {
    document.getElementById('modalPerfil').click()
}

document.getElementById('ftoPerfilidside').onclick = () => {
    document.getElementById('modalPerfil').click()
}


function infoPerfil() {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    document.getElementById('infoModalPerfil').innerHTML = `
    
    <p>Nome: ${dados.nome}</p>
    <p>Email: ${dados.email}</p>
    <p>contato: ${dados.infoUsuario.contato}</p>
    <p>cpf:${dados.infoUsuario.cpj}</p>
    `
}

// Estoque

sessionStorage.key(1)

const salvarProduto = document.getElementById('button_salvar_produto').onclick = () => {
    console.log("show")
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))


    var matrizConfirma = true
    for (i = 1; i < dados.produto.length; i++) {
        if (dados.produto[i].codEAN == document.getElementById('cadastroEAN').value) {
            var matrizConfirma = false
        } else {
            var matrizConfirma = true
        }
    }

    if (matrizConfirma) {
        console.log('a')
        if (
            document.getElementById('cadastroProduto').value != "" &&
            document.getElementById('cadastroEAN').value != "" &&
            document.getElementById('cadastroCategoria').value != "" &&
            document.getElementById('cadastroQuantidade').value != "" &&
            document.getElementById('cadastroValor').value != "" &&
            typeof parseFloat(document.getElementById('cadastroValor').value) == typeof 0 &&
            typeof parseInt(document.getElementById('cadastroQuantidade').value) == typeof 0 &&
            typeof parseInt(document.getElementById('cadastroEAN').value) == typeof 0
        ) {
            var cadastroProduto = document.getElementById('cadastroProduto').value;
            var cadastroEAN = document.getElementById('cadastroEAN').value;
            var cadastroQuantidade = document.getElementById('cadastroCategoria').value;
            var cadastroCategoria = document.getElementById('cadastroQuantidade').value;
            var cadastroFornecedor = document.getElementById('cadastroFornecedor').value;
            var cadastroValor = document.getElementById('cadastroValor').value

            const dadoProduto = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
            const getId = dadoProduto.produto.length
            const componente = {
                cod: dadoProduto.produto[0],
                nome: cadastroProduto,
                codEAN: cadastroEAN,
                categoria: cadastroQuantidade,
                quantidade: cadastroCategoria,
                fornecedor: cadastroFornecedor,
                preco: cadastroValor.replace(',', '.')
            }

            dadoProduto.produto[0] = dadoProduto.produto[0] + 1
            dadoProduto.produto.push(componente)
            localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dadoProduto))
        }


    } else {
        document.getElementById('click').click()

    }

}

var quant = 0
document.getElementById('button_salvar_produto').onclick = salvarProduto;



var ctx = document.getElementById('graficoDoEstoque');
var ctx = document.getElementById('graficoDoEstoque').getContext('2d');
var ctx = $('#graficoDoEstoque');
var ctx = 'graficoDoEstoque';
var ctx = document.getElementById('graficoDoEstoque');

function graficoEstoque() {
    if (typeof myChart != 'undefined') {
        myChart.destroy()
    }

    myChart = new Chart(ctx, {
        type: 'doughnut',
        data:
        {
            labels: [],
            datasets: [{
                label: '',
                data: [],
                backgroundColor: [
                    '#ff595e',
                    '#ffca3a',
                    '#8ac926',
                    '#1982c4',
                    '#1982c4',
                    '#6a4c93',
                    '#f72585',
                    '#b5179e',
                    '#7209b7',
                    '#560bad',
                    '#480ca8',
                    '#3a0ca3',
                    '#3f37c9',
                    '#4361ee',
                    '#4895ef',
                    '#b7094c',
                    '#723c70',
                    '#455e89',
                    '#1780a1',
                    '#1d4e89',
                    '#3fc1c0',
                    '#6a00f4',
                    '#54478c',
                    '#048ba8',
                    '#b9e769'
                ],

                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Quantidade de produtos por categorias'
                },
                legend: {
                    display: false,
                    labels: {
                        color: 'rgb(255, 99, 132)'
                    }
                }
            }
        }
    });

    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    for (i = 1; i < dados.produto.length; i++) {
        myChart.data.labels.push(dados.produto[i].nome)
        myChart.data.datasets[0].data[i - 1] = dados.produto[i].quantidade
    }

    myChart.update()

    document.getElementById('cadastroProduto').value = ""
    document.getElementById('cadastroEAN').value = ""
    document.getElementById('cadastroCategoria').value = ""
    document.getElementById('cadastroQuantidade').value = ""
    document.getElementById('cadastroFornecedor').value = ""
    document.getElementById('cadastroValor').value = ""

}


function sairSistema() {
    sessionStorage.setItem(0, "")
    location.href = "../index.html"
}



// funcao master

function dadosProdutos() {

    let selectHtml = document.getElementById('produtos')
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    let txt = ""
    let quantEstoque = 0
    let quantProduto = 0
    let valorTotal = 0

    for (i = 1; i < dados.produto.length; i++) {
        quantProduto++
        quantEstoque = quantEstoque + Number.parseInt(dados.produto[i].quantidade)
        valorTotal = valorTotal + Number.parseFloat(dados.produto[i].preco) * quantEstoque
        txt = txt + `
        <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
      <h2 class="accordion-header" id="TESTE-AR">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#${(dados.produto[i].nome+dados.produto[i].cod).replaceAll(" ", "")}" aria-expanded="false"
              aria-controls="${(dados.produto[i].nome+dados.produto[i].cod).replaceAll(" ", "")}">
              ${dados.produto[i].nome}
          </button>
      </h2>
      <div id="${(dados.produto[i].nome+dados.produto[i].cod).replaceAll(" ", "")}" class="accordion-collapse collapse"

          aria-labelledby="TESTE-AR">

          <table>
            <tr>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Fornecedor</th>
                <th>Categoria</th>
                <th>EAN</th>
            </tr>
            <tr>
                <td>${dados.produto[i].quantidade}</td>
                <td>${dados.produto[i].preco}</td>
                <td>${dados.produto[i].fornecedor}</td>
                <td>${dados.produto[i].categoria}</td>
                <td>${dados.produto[i].codEAN}</td>
                <td> <button class="button_excluir" style="border: none;" onclick="excluirProduto(${dados.produto[i].cod})"><i class="far fa-times-circle"></i></button></td>
                <td><button type="button" id="clickEditar" onclick="editarProduto(${dados.produto[i].cod})" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#exampleModalwe">editar</button></tr>
            </tr>
            </table>
      </div>
  </div>
</div>
        `
    }
    document.getElementById('quantProduto').innerHTML = quantProduto
    document.getElementById('quantEstoque').innerHTML = quantEstoque
    document.getElementById('valorEstoque').innerHTML = "R$ " + valorTotal.toFixed(2)
    document.getElementById('ProdutoRetirado').innerHTML = "R$ " + dados.ValorVendido
    selectHtml.innerHTML = txt
}


function valorEstoque() {
    let vendaProduto = document.getElementById('informaVendaProduto').value
    let vendaQuantidade = document.getElementById('informaQuantidade').value
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))

    for (i = 1; i < dados.produto.length; i++) {
        if (dados.produto[i].nome == vendaProduto) {
            if (Number.parseInt(dados.produto[i].quantidade) >= vendaQuantidade) {
                dados.produto[i].quantidade = Number.parseInt(dados.produto[i].quantidade) - vendaQuantidade
                dados.ValorVendido = dados.ValorVendido + Number.parseFloat(dados.produto[i].preco.replace(',', '.')) * vendaQuantidade
            } else {
                alert('quantidade insuficiente')
            }
        }
    }
    document.getElementById('ProdutoRetirado').innerHTML = "R$ " + dados.ValorVendido
    localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dados))
}

function excluirProduto(dadosExcluir) {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    for (i = 1; i < dados.produto.length; i++) {
        if (dados.produto[i].cod == dadosExcluir) {
            dados.produto.splice(i, 1)
            localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dados))
        }
    }
    myChart.update()
    dadosProdutos()
    graficoEstoque()

}






function itemFornecedor() {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    let html = document.getElementById('cadastroFornecedorEdita')
    let txt = ""

    for (i = 1; i < dados.fornecedor.length; i++) {
        txt = txt + `
        <option value="${dados.fornecedor[i].nomeFant}">${dados.fornecedor[i].nomeFant}</option>
        `
    }

    html.innerHTML = txt
}



function itemCategoria() {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    let html = document.getElementById('cadastroCategoriaEdita')
    let txt = ""

    for (i = 1; i < dados.categoria.length; i++) {
        txt = txt + `
        <option value="${dados.categoria[i]}">${dados.categoria[i]}</option>
        `
    }

    html.innerHTML = txt
}


function itemFornecedorPrincipal() {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    let html = document.getElementById('cadastroFornecedor')
    let txt = ""

    for (i = 1; i < dados.fornecedor.length; i++) {
        txt = txt + `
        <option value="${dados.fornecedor[i].nomeFant}">${dados.fornecedor[i].nomeFant}</option>
        `
    }

    html.innerHTML = txt
}



function itemCategoriaPrincipal() {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    let html = document.getElementById('cadastroCategoria')
    let txt = ""

    for (i = 0; i < dados.categoria.length; i++) {
        txt = txt + `
        <option value="${dados.categoria[i]}">${dados.categoria[i]}</option>
        `
    }

    html.innerHTML = txt
}






function editarProduto(cod) {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    for (i = 1; i < dados.produto.length; i++) {
        if (dados.produto[i].cod == cod) {
            let dadosModal = dados.produto[i]

            let txt = `<div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Cadastra Produtos:</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body row">
                <div class="mb-3 col-7">
                  <label for="cadastroProduto" class="form-label">Produto:</label>
                  <input type="text" class="form-control" id="cadastroProdutoEdita" value="${dadosModal.nome}" autocomplete="off">
                </div>
                <div class="mb-3 col-5">
                  <label for="cadastroEAN" class="form-label">Código EAN:</label>
                  <input type="text" class="form-control" id="cadastroEANEdita" disabled="" value="${dadosModal.codEAN}">
                </div>
                <div class="mb-3 col-6 ">
                  <label for="cadastroQuantidade" class="form-label">Quantidade:</label>
                  <input type="text" class="form-control" id="cadastroQuantidadeEdita" value="${dadosModal.quantidade}" autocomplete="off">
                </div>
                <div class="mb-3 col-6">
                  <label for="cadastroValor" class="form-label">Preço:</label>
                  <input type="text" class="form-control" id="cadastroValorEdita" value="${dadosModal.preco}" autocomplete="off">
                </div>
                <div class="mb-3">
                  <label for="cadastroCategoria" class="form-label">Categoria:</label>
                  <select class="form-select" aria-label="Default select example" id="cadastroCategoriaEdita" autocomplete="off" placeholder="Seleção de fornecedor">
                    
                    
                    
                  </select>
                </div>
                <div class="mb-3">
                  <label for="cadastroFornecedor" class="form-label">Fornecedor</label>
                  <select class="form-select" aria-label="Default select example" id="cadastroFornecedorEdita">
                    
                  </select>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button id="button_salvar_produto_edital" type="button" class="btn btn-primary" onclick="salvarProdutoEdita()">Salvar</button>
              </div>
            </div>
          </div>`

            document.getElementById('modalEditar').innerHTML = txt

        }
    }
    itemFornecedor()
    itemCategoria()
    document.getElementById('clickEditarActive').click()

}

function salvarProdutoEdita() {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    for (i = 1; i < dados.produto.length; i++) {
        if (dados.produto[i].codEAN == document.getElementById('cadastroEANEdita').value) {
            dados.produto[i].nome = document.getElementById('cadastroProdutoEdita').value;
            dados.produto[i].codEAN = document.getElementById('cadastroEANEdita').value;
            dados.produto[i].categoria = document.getElementById('cadastroCategoriaEdita').value;
            dados.produto[i].quantidade = document.getElementById('cadastroQuantidadeEdita').value;
            dados.produto[i].fornecedor = document.getElementById('cadastroFornecedorEdita').value;
            dados.produto[i].preco = document.getElementById('cadastroValorEdita').value
        }
    }

    localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dados))
    dadosProdutos()
    myChart.update()
    graficoEstoque()
}

function itemModal() {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    let html = document.getElementById('informaVendaProduto')
    let txt = ``

    for (i = 1; i < dados.produto.length; i++) {
        console.log(1)
        txt = txt + `
            <option value="${dados.produto[i].nome}">${dados.produto[i].nome}</option>
        `
    }

    html.innerHTML = txt

}



window.onload = () => {
    dadosProdutos()
    graficoEstoque()
    itemModal()

    perfil()
    infoPerfil()
}




document.getElementById('busca_item').onclick = () => {
    itemModal()
    myChart.update()
    dadosProdutos()
    graficoEstoque()
}


document.getElementById('Adicionar_venda_produto').onclick = () => {
    valorEstoque()
    myChart.update()
    dadosProdutos()
    graficoEstoque()

}

