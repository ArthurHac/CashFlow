
// Estoque

sessionStorage.key(1)

const salvarProduto = document.getElementById('button_salvar_produto').onclick = () => {
    console.log("show")

    var cadastroProduto = document.getElementById ('cadastroProduto').value;
    var cadastroEAN = document.getElementById ('cadastroEAN').value;
    var cadastroQuantidade = document.getElementById ('cadastroCategoria').value;
    var cadastroCategoria = document.getElementById ('cadastroQuantidade').value;
    var cadastroFornecedor = document.getElementById ('cadastroFornecedor').value;

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

var quant = 0 
const adicionarHTMLproduto  = () => {
    
    const prod = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    const prodPropriedade = prod.produto

    for(i = 1; i < document.getElementsByClassName("list-group-item").length; i++){
        const lista = document.getElementsByTagName("div")
        const item = lista.getElementsByClassName("accordion")
        lista.removeChild(lista[i])
    }
    
    for(i = 1; i < prod.produto.length; i++){
        quant +=  prodPropriedade[i].quantidade
        console.log(quant)
        const node = document.createElement("li")
        node.innerHTML = `
        
            <div class="accordion" id="accordionPanelsStayOpenExample">
        
                <div class="accordion-item">
        
                    <h2 class="accordion-header" id="TESTE-AR">
        
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        
                            data-bs-target="#${prodPropriedade[i].nome}" aria-expanded="false"
        
                            aria-controls="${prodPropriedade[i].nome}">
        
                            ${prodPropriedade[i].nome}
        
                        </button>
        
                    </h2>
        
                    <div id="${prodPropriedade[i].nome}" class="accordion-collapse collapse"
        
                        aria-labelledby="TESTE-AR">
        
                        <div class="accordion-body">
        
                        <p>${prodPropriedade[i].quantidade}</p>
                        <p>${prodPropriedade[i].fornecedor}</p>
                        <p>${prodPropriedade[i].categoria}</p>
                        <p>${prodPropriedade[i].cadastroEAN}</p>
        
                        </div>
        
                    </div>
        
                </div>
        
            </div>
        
        

     `
        
        document.getElementById("prod_lista").appendChild(node)
    }
}


document.getElementById('button_salvar_produto').onclick = salvarProduto;
document.getElementById('busca_item').onclick = adicionarHTMLproduto

var ctx = document.getElementById('graficoDoEstoque');
var ctx = document.getElementById('graficoDoEstoque').getContext('2d');
var ctx = $('#graficoDoEstoque');
var ctx = 'graficoDoEstoque';
var ctx = document.getElementById('graficoDoEstoque');
var myChart = new Chart(ctx, {
    type: 'bar',
    data:
     {       
          labels: ['Produto 01', 'Produto 02', 'Produto 03', 'Produto 04', 'Produto 05' , 'Produto 06' , 'Produto 07' , 'Produto 08' , 'Produto 09' , 'Produto 10'],
     datasets: [{
         label: '',
         data: [10, 09, 08, 07, 06, 05, 04, 03, 02, 01],
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