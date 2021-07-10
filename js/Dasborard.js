// fto perfil

function perfil(){
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


function infoPerfil(){
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    document.getElementById('infoModalPerfil').innerHTML = `
    
    <p>Nome: ${dados.nome}</p>
    <p>Email: ${dados.email}</p>
    <p>contato: ${dados.infoUsuario.contato}</p>
    <p>cpf:${dados.infoUsuario.cpj}</p>
    `
}


// produto

var ctx = document.getElementById('graficoDoEstoqueGraf');
var ctx = document.getElementById('graficoDoEstoqueGraf').getContext('2d');
var ctx = $('#graficoDoEstoqueGraf');
var ctx = 'graficoDoEstoqueGraf';
var ctx = document.getElementById('graficoDoEstoqueGraf');

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
                    '#b9e769',
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
                    '#3f37c9'
                   
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
            },
            scales: {
                y: {
                    display: false
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

}



// pesquisas

var ctxD = document.getElementById('graficoDoDespesaGraf');
var ctxD = document.getElementById('graficoDoDespesaGraf').getContext('2d');
var ctxD = $('graficoDoDespesaGraf');
var ctxD = 'graficoDoDespesaGraf';
var ctxD = document.getElementById('graficoDoDespesaGraf');

function graficoDespesa() {
    if (typeof myChartD != 'undefined') {
        myChartD.destroy()
    }

    myChartD = new Chart(ctxD, {
        type: 'doughnut',
        data:
        {
            labels: [],
            datasets: [{
                label: '# of Votes',
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

                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Despesas'
                }
            },
            scales: {
                y: {
                    display: false
                }
            },
        }
    });

    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    for (i = 1; i < dados.despesa.length ; i++) {
        myChartD.data.labels.push(dados.despesa[i].descricao)
        myChartD.data.datasets[0].data[i - 1] = dados.despesa[i].valor
    }

    myChartD.update()

}

// estoque


var ctxE = document.getElementById('graficoDoDespesaSaldo');
var ctxE = document.getElementById('graficoDoDespesaSaldo').getContext('2d');
var ctxE = $('graficoDoDespesaSaldo');
var ctxE = 'graficoDoDespesaSaldo';
var ctxE = document.getElementById('graficoDoDespesaSaldo');

function graficoDespesaSaldo() {
    if (typeof myChartE != 'undefined') {
        myChartE.destroy()
    }

    myChartE = new Chart(ctxE, {
        type: 'doughnut',
        data:
        {
            labels: [],
            datasets: [{
                label: '# of Votes',
                data: [],
                backgroundColor: [
             
                    '#54478c',
                    '#048ba8',
                    '#b9e769',
                    '#3f37c9',
                    '#4361ee',
                 
                    '#f72585',
                    '#560bad',
                    '#3a0ca3',
                    '#b7094c',
                    '#723c70',
                    '#455e89',
                    '#1780a1',
                    '#1d4e89',
                    '#3fc1c0',
                    '#6a00f4',  
                    '#b7094c',
                    '#723c70',
                    '#455e89',
                    '#1780a1',
                    '#1d4e89',
                    '#3fc1c0',
                    '#6a00f4',
                    '#54478c',
                    '#048ba8',
                    '#b9e769',
                    '#ff595e',
                    '#ffca3a',
                    '#8ac926',
                    '#1982c4',
                    '#1982c4',
                    '#6a4c93',  
                    
                ],

                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Despesas X Renda'
                }
            },
            scales: {
                y: {
                    display: false
                }
            },
        }
    });

    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    myChartE.data.labels.push('Renda')
    myChartE.data.labels.push('Despesas')
    let quant = 0
    for (i = 1; i < dados.despesa.length; i++) {
        quant = quant + parseFloat(dados.despesa[i].valor)
    }

    myChartE.data.datasets[0].data[0] = dados.infoUsuario.renda
    myChartE.data.datasets[0].data[1] = quant

    myChartE.update()

}

function dadosDespesa() {
    let selectHtml = document.getElementById('localDespesasDash')
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    let txt = ``
    let quant = "a"
    for (i = 1; i < dados.despesa.length; i++) {
        txt = txt +

            `
      
            <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="TESTE-AR">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#${dados.despesa[i].descricao}" aria-expanded="false"
                        aria-controls="${dados.despesa[i].descricao}}">
                        ${dados.despesa[i].descricao}
                    </button>
                </h2>
                <div id="${dados.despesa[i].descricao}" class="accordion-collapse collapse"
          
                    aria-labelledby="TESTE-AR">
          
                    <table>
                      <tr>
                          <th>Descrição</th>
                          <th>Valor</th>
                          <th>Vencimento</th>
                          <th>Categoria</th>
                         
                      </tr>
                      <tr>
                          <td>${dados.despesa[i].descricao}</td>
                          <td>${dados.despesa[i].valor}</td>
                          <td>${dados.despesa[i].vencimento}</td>
                          <td>${dados.despesa[i].categoria}</td>
                          
                         
                      </tr>
                      </table>
                </div>
            </div>
          </div>
    `
        quant = quant + "a"
    }

    selectHtml.innerHTML = txt
}

function dadosProdutos() {

    let selectHtml = document.getElementById('produtosDash')
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    let txt = ``
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
               
            </tr>
            </table>
      </div>
  </div>
</div>
        `
    }
    
    selectHtml.innerHTML = txt
}


window.onload = () => {
    perfil()
    infoPerfil()
    graficoDespesa()
    graficoDespesaSaldo()
    graficoEstoque()
    dadosDespesa()
    dadosProdutos()
}