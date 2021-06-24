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
              data-bs-target="#exampleModal">
              <i class="fas fa-edit"></i>
            </button>
            <button class="excluirFornecedores btn btn-danger onclick="excluirFornecedor(${dados.fornecedor[i].nomeFant})">
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

document.getElementById('cadastroDoFornecedor').onclick = () => {
  console.log("show")

  let nomeFantasia = document.getElementById('nomeFantasia').value;
  let razaoSocial = document.getElementById('razaoSocial').value;
  let CNPJ = document.getElementById('CNPJ').value;
  let cep = document.getElementById('cep').value;
  let endereco = document.getElementById('endereco').value
  let numero = document.getElementById('numero').value
  let bairro = document.getElementById('bairro').value
  let cidade = document.getElementById('cidade').value
  let estado = document.getElementById('estado').value
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
    est: estado,
    nomeRespon: nomeResponsavel,
    cont: contato,
    mail: email,
    atuaca: campoDeAtuacao,
    cat: categoria
  }

  dadosFornecedor.fornecedor[0] = getId
  dadosFornecedor.fornecedor.push(componente)
  localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dadosFornecedor))

  dadosFornecedor()
}

function excluirFornecedor(excluirDados) {
  console.log(excluirDados.getAttribute('id'))
  let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
  for (i = 1; i < dados.fornecedor.length; i++) {
      if (dados.fornecedor[i].nome == excluirDados.getAttribute('id')) {
          dados.fornecedor.splice(i, 1)
          localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dados))
      }
  }
  dadosFornecedor()
}


window.onload = () => {
  dadosFornecedor()
}


