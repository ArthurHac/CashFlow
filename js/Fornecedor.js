sessionStorage.key(1)

function dadosFornecedor() {

  let selectHtml = document.getElementById('adcionarFornecedor')
  let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
  let txt = ""
  let quant = "a"
  for (i = 1; i <dados.fornecedor.length; i++) {
    txt = txt +

      `

      <div id="listaFornecedor">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${quant}" aria-expanded="false" aria-controls="${quant}">
            ${dados.fornecedor[i].nomeFant}
            </button>
          </h2>
          <div id="${quant}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">

          <section class="row">
          <ul class="list-group col-11 listFor">
            <li class="list-group-item ml-3 border-top"><strong>Razão Social: </strong>${dados.fornecedor[i].razaoSoc}</li>
            <li class="list-group-item ml-3"><strong>Nome Fantasia: </strong>${dados.fornecedor[i].nomeFant}</li>
            <li class="list-group-item ml-3"><strong>CNPJ: </strong>${dados.fornecedor[i].cnpj}</li>
            <li class="list-group-item ml-3"><strong>Logradouro: </strong>${dados.fornecedor[i].end}, ${dados.fornecedor[i].num} - ${dados.fornecedor[i].bair}, ${dados.fornecedor[i].cid} - ${dados.fornecedor[i].est}, ${dados.fornecedor[i].cp}</li>
            <li class="list-group-item ml-3"><strong>Contato: </strong> ${dados.fornecedor[i].cont}</li>
            <li class="list-group-item ml-3"><strong>E-mail: </strong> ${dados.fornecedor[i].mail}</li>
            <li class="list-group-item ml-3"><strong>Campo de Atuação: </strong> ${dados.fornecedor[i].atuaca}</li>
            <li class="list-group-item ml-3 border-bottom"><strong>Categoria: </strong> ${dados.fornecedor[i].cat}</li>
          </ul>

          <div class="col-1 listFor">
            <button type="button" class="btn btn-primary editarFornecedor" data-bs-toggle="modal"
              data-bs-target="#editarFornecedor">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-danger excluirFornecedores" onclick="excluirFornecedor('${dados.fornecedor[i].nomeFant}')">
            <i class="fas fa-trash"></i>
          </button>
          </div>

        </section>
        
          </div>
        </div>
        </div>
    </div>
    
    `
    quant = quant + "a"
  }

  selectHtml.innerHTML = txt
}


function salvaFornecedor () {
  console.log("show")

  let nomeFantasia = document.getElementById('nomeFantasia').value
  let razaoSocial = document.getElementById('razaoSocial').value
  let CNPJ = document.getElementById('CNPJ').value
  let cep = document.getElementById('cep').value
  let endereco = document.getElementById('endereco').value
  let numero = document.getElementById('numero').value
  let bairro = document.getElementById('bairro').value
  let cidade = document.getElementById('cidade').value
  let uf = document.getElementById('uf').value
  let nomeResponsavel = document.getElementById('nomeResponsavel').value
  let contato = document.getElementById('contato').value
  let email = document.getElementById('email').value
  let campoDeAtuacao = document.getElementById('campoDeAtuacao').value
  let categoria = document.getElementById('categoria').value

  const dadosFornecedor = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
  const getId = dadosFornecedor.fornecedor.length
  const componente = {
    razaoSoc: razaoSocial,
    nomeFant: nomeFantasia,
    cnpj: CNPJ,
    cp: cep,
    end: endereco,
    num: numero,
    bair: bairro,
    cid: cidade,
    est: uf,
    nomeRespon: nomeResponsavel,
    cont: contato,
    mail: email,
    atuaca: campoDeAtuacao,
    cat: categoria
  }

  dadosFornecedor.fornecedor[0] = getId
  dadosFornecedor.fornecedor.push(componente)
  localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dadosFornecedor))

}

function excluirFornecedor(excluirDados) {
  // console.log(excluirDados.getAttribute('id'))
  let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
  for (i = 1; i < dados.fornecedor.length; i++) {
      if (dados.fornecedor[i].nomeFant == excluirDados) {
          dados.fornecedor.splice(i, 1)
          localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dados))
      }
  }
  
  dadosFornecedor()
}


window.onload = () => {
  dadosFornecedor()
}


document.getElementById('cadastroDoFornecedor').onclick = () => {
  salvaFornecedor()
  dadosFornecedor()
}






function mascaraCNPJ(cnpj) {

  if (mascaraInteiro(cnpj) == false) {

      event.returnValue = false

  }

  return formataCampo(cnpj, '00.000.000/0000-00', event)

}

//valida o CNPJ digitado

function validarCNPJ(ObjCnpj) {

  let cnpj = ObjCnpj.value
  let valida = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2)
  let dig1 = new Number
  let dig2 = new Number

  exp = /\.|\-|\//g
  cnpj = cnpj.toString().replace(exp, "")

  let digito = new Number(eval(cnpj.charAt(12) + cnpj.charAt(13)))
  for (i = 0; i < valida.length; i++) {
      dig1 += (i > 0 ? (cnpj.charAt(i - 1) * valida[i]) : 0)
      dig2 += cnpj.charAt(i) * valida[i]

  }

  dig1 = (((dig1 % 11) < 2) ? 0 : (11 - (dig1 % 11)))
  dig2 = (((dig2 % 11) < 2) ? 0 : (11 - (dig2 % 11)))

  if (((dig1 * 10) + dig2) != digito) {

      alert('CNPJ Invalido!')

  }

}


document.getElementById('CNPJ').addEventListener('input', function(e) {
  let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/)
  e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '')
})


//valida o CONTATO digitado

function mascaraContato(contato){ 
  if(contato.value.length == 0)
      contato.value = '(' + contato.value
  if(contato.value.length == 3)
      contato.value = contato.value + ') '

  if(contato.value.length == 9)
      contato.value = contato.value + '-'
}


//valida o API CEP digitado


function cont(retorno) {
if (!("erro" in retorno)) {
  document.getElementById('endereco').value=(retorno.logradouro)
  document.getElementById('bairro').value=(retorno.bairro)
  document.getElementById('cidade').value=(retorno.localidade)
  document.getElementById('uf').value=(retorno.uf)
}

else {
  limpaFormularioCep()
  alert("CEP não encontrado.")
}
}

function pesquisaCep(valor) {
let cep = valor.replace(/\D/g, '')

if (cep != "") {
  let validacep = /^[0-9]{8}$/
  if(validacep.test(cep)) {
      document.getElementById('cep').value = cep.substring(0,5)
      +"-"
      +cep.substring(5)
      document.getElementById('endereco').value="..."
      document.getElementById('bairro').value="..."
      document.getElementById('cidade').value="..."
      document.getElementById('uf').value="..."
      let script = document.createElement('script')
      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=cont'
      document.body.appendChild(script)
  }

  else {
      limpaFormularioCep()
      alert("Formato de CEP inválido.")
  }
}
else {
  limpaFormularioCep()
}
}



function editarProduto(codEAN) {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    for (i = 1; i < dados.produto.length; i++) {
        if (dados.produto[i].codEAN == codEAN) {
            let dadosModal = dados.produto[i]

            let txt = `<div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Cadastra Produtos:</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body row">
                <div class="mb-3 col-7">
                  <label for="cadastroProduto" class="form-label">Produto:</label>
                  <input type="text" class="form-control" id="cadastroProdutoEdita" value="${dadosModal.nome}" autocomplete="off">
                </div>
                <div class="mb-3 col-5">
                  <label for="cadastroEAN" class="form-label">Código EAN:</label>
                  <input type="text" class="form-control" id="cadastroEANEdita" disabled="" value="${dadosModal.codEAN}">
                </div>
                <div class="mb-3 col-6 ">
                  <label for="cadastroQuantidade" class="form-label">Quantidade:</label>
                  <input type="text" class="form-control" id="cadastroQuantidadeEdita" value="${dadosModal.quantidade}" autocomplete="off">
                </div>
                <div class="mb-3 col-6">
                  <label for="cadastroValor" class="form-label">Preço:</label>
                  <input type="text" class="form-control" id="cadastroValorEdita" value="${dadosModal.preco}" autocomplete="off">
                </div>
                <div class="mb-3">
                  <label for="cadastroCategoria" class="form-label">Categoria:</label>
                  <select class="form-select" aria-label="Default select example" id="cadastroCategoriaEdita" autocomplete="off" placeholder="Seleção de fornecedor">
                    
                    
                    
                  </select>
                </div>
                <div class="mb-3">
                  <label for="cadastroFornecedor" class="form-label">Fornecedor</label>
                  <select class="form-select" aria-label="Default select example" id="cadastroFornecedorEdita">
                    
                  </select>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button id="button_salvar_produto_edital" type="button" class="btn btn-primary" onclick="salvarProdutoEdita()">Salvar</button>
              </div>
            </div>
          </div>`

            document.getElementById('modalEditar').innerHTML = txt

        }
    }
    itemFornecedor()
    itemCategoria()
    document.getElementById('clickEditarActive').click()

}

function salvarProdutoEdita() {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    for(i = 1; i < dados.produto.length; i++){
        if (dados.produto[i].codEAN == document.getElementById('cadastroEANEdita').value) {
            dados.produto[i].nome = document.getElementById('cadastroProdutoEdita').value;
            dados.produto[i].codEAN = document.getElementById('cadastroEANEdita').value;
            dados.produto[i].categoria = document.getElementById('cadastroCategoriaEdita').value;
            dados.produto[i].quantidade = document.getElementById('cadastroQuantidadeEdita').value;
            dados.produto[i].fornecedor = document.getElementById('cadastroFornecedorEdita').value;
            dados.produto[i].preco = document.getElementById('cadastroValorEdita').value
        }
    }

    localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dados))
    dadosProdutos()
    myChart.update()
    graficoEstoque()
}