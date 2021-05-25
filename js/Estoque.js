
// Estoque

sessionStorage.key(1)

const salvarProduto = document.getElementById('button_salvar_produto').onclick = () => {
    console.log("show")

    var cadastroProdutos = document.getElementById ('cadastroProduto').value;
    var cadastroEAN = document.getElementById ('cadastroEAN').value;
    var cadastroCategoria = document.getElementById ('cadastroQuantidade').value;
    var cadastroQuantidade = document.getElementById ('cadastroCategoria').value;
    var cadastroFornecerdor = document.getElementById ('cadastroFornecedor').value;

    const dadoProduto = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    const getId = dadoProduto.produto.length
    const componente = { 
        nome: cadastroProduto,
        codEAN: cadastroEAN,
        categoria: cadastroQuantidade,
        quantidade: cadastroCategoria,
        fornecedor: cadastroFornecedor
    }

    dadoProduto.produto[0] = getId
    dadoProduto.produto.push(componente)
    localStorage.setItem(sessionStorage.getItem(0),JSON.stringify(dadoProduto))
}


const adicionarHTMLproduto  = () => {
    
    const prod = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    const prodPropriedade = prod.produto
    


    for(i = 1; i < prod.produto.length; i++){
        
        const node = document.createElement("li")
        node.className = "list-group-item" 
        node.innerHTML = `
        <p>${prodPropriedade[i].nome}</p>
        <p>${prodPropriedade[i].categoria}</p>
        <p>${prodPropriedade[i].fornecedor}</p>
        <p>${prodPropriedade[i].quantidade}</p>
        ` 
        document.getElementById("produto_html").appendChild(node)
    }
}


document.getElementById('button_salvar_produto').onclick = salvarProduto;
document.getElementById('button_down').onclick = adicionarHTMLproduto

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