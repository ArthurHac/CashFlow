var ctx = document.getElementById('grafico01');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Entrada','Saida'],
        datasets: [{
            label: 'Entrada x Saida',
            data: [25, 20,],
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


$('document').ready(function () {

    $.ajax({
        type: "GET",
        url: "chart.php",
        dataType: "json",
        success:function (data){
            var mes = [];
            var vendas = [];
    
            for (var i = 0; i< data.length; i++)
            {
                mes.push(data[i].nome);
                vendas.push(data[i].vendas);
            }
            grafico03(mes, vendas)
        }

      });
    
    })
function grafico03 (mes, vendas){
var ctx = document.getElementById('grafico03');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['mes'],
        datasets: [
            {
                label: 'Meta',
                data: [100, 100, 100, 100, 100, 100],
                borderColor: 'rgba(0,191,255)',
                borderWidth: 3,
                type: 'line'
            },
            {
            label: '2019',
            data: [100, 67, 90, 115, 110, 120],
            backgroundColor:'rgba(255, 109, 112 )',
            borderColor: 'rgba(15, 109, 112 )',
            borderWidth: 1
        },
        {
            label: '2020',
            data: [111, 99, 97, 120, 105, 107],
            backgroundColor:'rgba(15, 76, 129)',
            borderColor: 'rgba(15, 76, 129)',
            borderWidth: 1
        },
    
    ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Meta por Ano",
                
            },
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    }
});
}

var ctx = document.getElementById('grafico04').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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