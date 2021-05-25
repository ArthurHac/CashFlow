
// Estoque

var
var ctx = document.getElementById('graficoDoEstoque');
var ctx = document.getElementById('graficoDoEstoque').getContext('2d');
var ctx = $('#graficoDoEstoque');
var ctx = 'graficoDoEstoque';
var ctx = document.getElementById('graficoDoEstoque');
var myChart = new Chart(ctx, {
    type: 'bar',
    data:
     {
        labels: ['Produto 00', 'Produto 01', 'Produto 02', 'Produto 03', 'Produto 04', 'Produto 05'],
        datasets: [{
            label: '',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#ff595e',
                '#ffca3a',
                '#8ac926',
                '#1982c4',
                '#1982c4',
                '#6a4c93'
            ],
            
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Quantidade de produtos por categorias'
            }
        },
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            },
            x:{
                display: false
            }
        }
    }
});