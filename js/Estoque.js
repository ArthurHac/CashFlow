
// Estoque

sessionStorage.key(1)

const salvarProduto = document.getElementById('button_salvar_produto').onclick = () => {
    console.log("show")

    var cadastroProduto = document.getElementById('cadastroProduto').value;
    var cadastroEAN = document.getElementById('cadastroEAN').value;
    var cadastroQuantidade = document.getElementById('cadastroCategoria').value;
    var cadastroCategoria = document.getElementById('cadastroQuantidade').value;
    var cadastroFornecedor = document.getElementById('cadastroFornecedor').value;
    var cadastroValor = document.getElementById('cadastroValor').value

    const dadoProduto = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    const getId = dadoProduto.produto.length
    const componente = {
        nome: cadastroProduto,
        codEAN: cadastroEAN,
        categoria: cadastroQuantidade,
        quantidade: cadastroCategoria,
        fornecedor: cadastroFornecedor,
        preco: cadastroValor.replace(',', '.')
    }

    dadoProduto.produto[0] = getId
    dadoProduto.produto.push(componente)
    localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dadoProduto))
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
    document.getElementById('cadastroValor').value= ""

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
              data-bs-target="#${dados.produto[i].nome}" aria-expanded="false"
              aria-controls="${dados.produto[i].nome}">
              ${dados.produto[i].nome}
          </button>
      </h2>
      <div id="${dados.produto[i].nome}" class="accordion-collapse collapse"

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
                <td> <button class="button_excluir" style="border: none;" onclick="excluirProduto(${dados.produto[i].nome})"><i class="far fa-times-circle"></i></button></td>
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
    console.log(dadosExcluir.getAttribute('id'))
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    for (i = 1; i < dados.produto.length; i++) {
        if (dados.produto[i].nome == dadosExcluir.getAttribute('id')) {
            dados.produto.splice(i, 1)
            localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dados))
        }
    }
    myChart.update()
    dadosProdutos()
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

