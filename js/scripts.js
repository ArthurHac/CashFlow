
var salvarProduto = function(){
    var cadastroProdutos = document.getElementById ('cadastroProdutos').value;
    var cadastroEAN = document.getElementById ('cadastroEAN').value;
    var cadastroCategoria = document.getElementById ('cadastroCategoria').value;
    var cadastroQuantidade = document.getElementById ('cadastroQuantidade').value;
    var cadastroFornecerdor = document.getElementById ('cadastroFornecerdor').value;
    sessionStorage.key(1)
    const getId = JSON.parse(localStorage.getItem(sessionStorage.key(1),id).value)
    const produto = { 
        nome: cadastroProdutos,
        codEAN: cadastroEAN,
        categoria: {},
        quantidade: cadastroQuantidade,
        fornecedor: cadastroFornecerdor
    }

    const dadoProduto = JSON.parse(localStorage.getItem(sessionStorage.key(1)))
    dadoProduto.produto = produto


    localStorage.setItem(sessionStorage.key(1),JSON.stringify(produto))
    
}

document.getElementById('button_salvar_produto').click = salvarProduto;



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