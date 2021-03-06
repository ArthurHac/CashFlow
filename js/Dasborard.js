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


// Entrada X Saida
var ctx = document.getElementById('graficoEntradaSaida');
var ctx = document.getElementById('graficoEntradaSaida').getContext('2d');
var ctx = $('#graficoEntradaSaida');
var ctx = 'graficoEntradaSaida';
var ctx = document.getElementById('graficoEntradaSaida');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data:
    {
        labels: ['Entrada', 'Saida'],
        datasets: [{
            label: '# of Votes',
            data: [20, 10],
            backgroundColor: [
                '#02c39a',
                '#e63946',
            ],

            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Entrada X Saida'
            },
        },
        scales: {
            y: {
                display: false
            }
        },
    }
});



// Estoque Atual
var ctx = document.getElementById('graficoEstoqueAtual');
var ctx = document.getElementById('graficoEstoqueAtual').getContext('2d');
var ctx = $('#graficoEstoqueAtual');
var ctx = 'graficoEstoqueAtual';
var ctx = document.getElementById('graficoEstoqueAtual');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data:
    {
        labels: ['Em Estoque', 'Em Falta'],
        datasets: [{
            label: '# of Votes',
            data: [20, 5],
            backgroundColor: [
                '#00afb9',
                '#e63946',
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Estoque Atual'
            }
        },
        scales: {
            y: {
                display: false
            }
        }
    }
});



// Faturamento por Ano
var ctx = document.getElementById('graficoMetaAnual');
var ctx = document.getElementById('graficoMetaAnual').getContext('2d');
var ctx = $('#graficoMetaAnual');
var ctx = 'graficoMetaAnual';
var ctx = document.getElementById('graficoMetaAnual');
var myChart = new Chart(ctx, {
    type: 'bar',
    data:
    {
        labels: ['Janeiro', 'Fevereiro', 'Mar??o', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Meta',
            data: [100, 100, 100, 100, 100, 100,],
            borderColor: ['#16db93'],
            borderWidth: 2,
            type: 'line',
        },
        {
            label: '2020',
            data: [40, 30, 70, 90, 80, 92],
            backgroundColor: ['#0f4c81',],
            borderWidth: 0
        },
        {
            label: '2021',
            data: [101, 120, 98, 70, 82, 99],
            backgroundColor: ['#F5DF4D',],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Faturamento por Ano'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            },
        }
    }
});

window.onload = () => {
    perfil()
    infoPerfil()
}