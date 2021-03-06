var ctx = document.getElementById('grafico01');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Entrada', 'Saida'],
        datasets: [{
            label: 'Entrada x Saida',
            data: [50, 10,],
            backgroundColor: [
                'rgba(50,205,50)',
                'rgba(220,20,60)'
            ],
            borderColor: [
                'rgba(50,205,50)',
                'rgba(220,20,60)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Entrada x Saida"
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
});


var ctx = document.getElementById('grafico02');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Em Estoque', 'Em Falta'],
        datasets: [{
            label: 'Estoque Atual',
            data: [245, 100],
            backgroundColor: [
                'rgba(0,191,255)',
                'rgba(255,99,71)',
            ],
            borderColor: [
                'rgba(0,191,255)',
                'rgba(255,99,71)',
            ],
            borderWidth: 2
        },]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Estoque Atual"
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
});







var ctx = document.getElementById('grafico03').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
            {
                label: 'Meta',
                type: 'line',
                data: [100, 100, 100, 100, 100,],
                backgroundColor: [
                    'rgba(3, 59, 38)'
                ],
                borderColor: [
                    'rgba(3, 59, 38)'
                ],
                borderWidth: 2
            },

            {

                label: '2019',
                data: [67, 84, 94, 37, 67, 84],
                backgroundColor: [
                    'rgba(#d76b00)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            },

            {
                label: '2020',
                data: [94, 97, 81, 79, 90, 98],
                backgroundColor: [
                    'rgba(#0f4c81)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            },
            {
                label: '2021',
                data: [100, 101, 95, 91, 107, 99],
                backgroundColor: [
                    'rgba(#F5DF4D)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }




        ]

    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});





sessionStorage.key(1)

const salvarProduto = document.getElementById('button_salvar_produto').onclick = () => {
    console.log("show")
    var cadastroProdutos = document.getElementById('cadastroProduto').value;
    var cadastroEAN = document.getElementById('cadastroEAN').value;
    var cadastroCategoria = document.getElementById('cadastroQuantidade').value;
    var cadastroQuantidade = document.getElementById('cadastroCategoria').value;
    var cadastroFornecerdor = document.getElementById('cadastroFornecedor').value;

    const dadoProduto = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    const getId = dadoProduto.produto.length
    const componente = {
        nome: cadastroProdutos,
        codEAN: cadastroEAN,
        categoria: cadastroCategoria,
        quantidade: cadastroQuantidade,
        fornecedor: cadastroFornecerdor
    }


    dadoProduto.produto[0] = getId
    dadoProduto.produto.push(componente)
    localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dadoProduto))
}




document.getElementById('button_salvar_produto').onclick = salvarProduto;
document.getElementById('busca_item').onclick = adicionarHTMLproduto

var ctx = document.getElementById('graficoEstoque').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [document.getElementById('cadastroProdutos').value = localStorage.cadastroProdutos],
        datasets: [{
            label: 'Categorias',
            data: [document.getElementById('cadastroQuantidade').value = localStorage.cadastroQuantidade],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});