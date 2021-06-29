var ctx = document.getElementById('graficoDoDespesa');
var ctx = document.getElementById('graficoDoDespesa').getContext('2d');
var ctx = $('graficoDoDespesa');
var ctx = 'graficoDoDespesa';
var ctx = document.getElementById('graficoDoDespesa');

function graficoDespesa() {
    if (typeof myChart != 'undefined') {
        myChart.destroy()
    }

    myChart = new Chart(ctx, {
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
                },
            },
            scales: {
                y: {
                    display: false
                }
            },
        }
    });

    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    for (i = 1; i < dados.despesa.length; i++) {
        myChart.data.labels.push(dados.despesa[i].descricao)
        myChart.data.datasets[0].data[i] = dados.despesa[i].valor
    }

    myChart.update()

}



function dadosDespesa() {
    let selectHtml = document.getElementById('localDespesas')
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    let txt = ""
    let quant = "a"
    for (i = 1; i < dados.despesa.length; i++) {
        txt = txt +

            `
      <div class="accordion-item p-0">
      <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${quant}" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
          ${dados.despesa[i].descricao}
        </button>
      </h2>
      <div id="${quant}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
        
        <table>
        <tr>
            <th>Vencimento</th>
            <th>Valor</th>
            <th>Categoria</th>
        </tr>
        <tr>
            <td>${dados.despesa[i].vencimento}</td>
            <td>R$${dados.despesa[i].valor}</td>
            <td>${dados.despesa[i].categoria}</td>
            <td> <button class="button_excluir" onclick="excluirDespesa('${dados.despesa[i].descricao}')" style="border: none;"><i class="far fa-times-circle"></i></button></td>
            <td><button type="button" id="clickEditarDespesa" class="btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#exampleModalwe">editar</button></tr>
        </tr>
        </table>
        </div>
    </div>

    `
        quant = quant + "a"
    }

    selectHtml.innerHTML = txt
}


function salvarDespesas() {
    let descricao = document.getElementById('descricaoDespesa').value
    let vencimento = document.getElementById('descricaoVencimento').value
    let valor = document.getElementById('descricaoValor').value
    let categoria = document.getElementById('descricaoCategoria').value

    if (descricao != '' && vencimento != '' && valor != '') {
        let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
        let getId = dados.despesa.length - 1
        let despesa = {
            descricao: descricao,
            vencimento: vencimento,
            valor: valor,
            categoria: categoria
        }

        dados.despesa[0] = getId
        dados.despesa.push(despesa)
        localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dados))

    } else {
        alert('dados faltando')
    }
}

function excluirDespesa(dadosExcluir) {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    for (i = 1; i < dados.despesa.length; i++) {
        if (dados.despesa[i].descricao == dadosExcluir) {
            dados.despesa.splice(i, 1)
            localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dados))
        }
    }

    dadosDespesa()
    myChart.update()
    graficoDespesa()
}

window.onload = () => {
    dadosDespesa()
    graficoDespesa()
}

document.getElementById('salvarDespesa').onclick = () => {
    dadosDespesa()
    salvarDespesas()
    graficoDespesa()
}
