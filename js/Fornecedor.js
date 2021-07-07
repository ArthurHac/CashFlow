sessionStorage.key(1)

// cadastro de FORNECEDOR

function dadosFornecedor() {

  let selectHtml = document.getElementById('adcionarFornecedor')
  let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
  let txt = ""
  let quant = "a"
  for (i = 1; i < dados.fornecedor.length; i++) {
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
              data-bs-target="#editarFornecedor" onclick="dadosFornecedorEdita('${dados.fornecedor[i].cnpj}')">
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


function salvaFornecedor() {
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
    atuaca: campoDeAtuacao
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



//validar CNPJ

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

// mascara CNPJ

document.getElementById('CNPJ').addEventListener('input', function (e) {
  let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/)
  e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '')
})



//validar CONTATO

function mascaraContato(contato) {
  if (contato.value.length == 0)
    contato.value = '(' + contato.value
  if (contato.value.length == 3)
    contato.value = contato.value + ') '

  if (contato.value.length == 9)
    contato.value = contato.value + '-'
}



//validar API CEP

function cont(retorno) {
  if (!("erro" in retorno)) {
    document.getElementById('endereco').value = (retorno.logradouro)
    document.getElementById('bairro').value = (retorno.bairro)
    document.getElementById('cidade').value = (retorno.localidade)
    document.getElementById('uf').value = (retorno.uf)
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
    if (validacep.test(cep)) {
      document.getElementById('cep').value = cep.substring(0, 5)
        + "-"
        + cep.substring(5)
      document.getElementById('endereco').value = "..."
      document.getElementById('bairro').value = "..."
      document.getElementById('cidade').value = "..."
      document.getElementById('uf').value = "..."
      let script = document.createElement('script')
      script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=cont'
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




function editarFornecedor(CNPJ) {
  let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
  for (i = 1; i < dados.fornecedor.length; i++) {
    if (dados.fornecedor[i].CNPJ == CNPJ) {
      let dadosModal = dados.fornecedor[i]

      let txt = `
          
          <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editarFornecedor">Edição de Fornecedor</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form class="row g-3">
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <label for="razaoSocial" class="form-label">Razão Social</label>
                  <input type="razaoSocial" class="form-control" id="razaoSocialEditar" value="${dadosModal.razaoSoc}">
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <label for="nomeFantasia" class="form-label">Nome Fantasia</label>
                  <input type="nomeFantasia" class="form-control" id="nomeFantasiaEditar value="${dadosModal.nomeFant}"">
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <label for="CNPJ" class="form-label">CNPJ</label>
                  <input type="CNPJ" class="form-control" id="CNPJEditar" maxlength="18" name="CNPJ" onblur="ValidarCNPJ(this);"
                    onkeypress="return event.charCode >= 48 && event.charCode <= 57" disabled="" value="${dadosModal.cnpj}">
                </div>
                <div class="col-sm-12 col-md-4 col-lg-3 col-xl-3">
                  <label for="cep" class="form-label">Cep</label>
                  <input type="cep" class="form-control" id="cepEditar" maxlength="9" onblur="pesquisaCep(this.value)" value="${dadosModal.cp}">
                </div>
                <div class="col-sm-12 col-md-4 col-lg-7 col-xl-7">
                  <label for="endereco" class="form-label">Endereço</label>
                  <input type="endereco" class="form-control" id="enderecoEditar" value="${dadosModal.end}">
                </div>
                <div class="col-sm-12 col-md-4 col-lg-2 col-xl-2">
                  <label for="numero" class="form-label">Número</label>
                  <input type="numero" class="form-control" id="numeroEditar" value="${dadosModal.num}">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5">
                  <label for="bairro" class="form-label">Bairro</label>
                  <input type="bairro" class="form-control" id="bairroEditar" value="${dadosModal.bair}">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5">
                  <label for="cidade" class="form-label">Cidade</label>
                  <input type="cidade" class="form-control" id="cidadeEditar" value="${dadosModal.cid}">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-2 col-xl-2">
                  <label for="estado" class="form-label">Estado</label>
                  <input type="estado" class="form-control" id="estadoEditar" maxlength="2" value="${dadosModal.est}">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                  <label for="nomeResponsavel" class="form-label">Nome Responsável</label>
                  <input type="nomeResponsavel" class="form-control" id="nomeResponsavelEditar" value="${dadosModal.nomeRespon}">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <label for="contato" class="form-label">Contato</label>
                  <input type="contato" class="form-control" id="contatoEditar" maxlength="15"
                    onkeypress="mascaraContato(this)" value="${dadosModal.cont}">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5">
                  <label for="email" class="form-label">E-mail</label>
                  <input type="email" class="form-control" id="emailEditar" value="${dadosModal.mail}">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <label for="campoDeAtuacao" class="form-label">Campo de Atuação</label>
                  <input type="campoDeAtuacao" class="form-control" id="campoDeAtuacaoEditar" value="${dadosModal.atuaca}">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" class="btn btn-primary" onclick="salvarFornecedorEdita()">Editar Alterações</button>
            </div>
          </div>
        </div>
          
          `

      document.getElementById('modalEditar').innerHTML = txt

    }
  }
  itemFornecedor()
  document.getElementById('clickEditarActive').click()

}

function dadosFornecedorEdita(cnpj) {
  let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    for (i = 1; i < dados.fornecedor.length; i++) {
      if (cnpj == dados.fornecedor[i].cnpj) {
        document.getElementById('nomeFantasiaEditar').value = dados.fornecedor[i].nomeFant
        document.getElementById('razaoSocialEditar').value = dados.fornecedor[i].razaoSoc
        document.getElementById('CNPJEditar').value = dados.fornecedor[i].cnpj
        document.getElementById('cepEditar').value = dados.fornecedor[i].cp
        document.getElementById('enderecoEditar').value = dados.fornecedor[i].end
        document.getElementById('numeroEditar').value = dados.fornecedor[i].num
        document.getElementById('bairroEditar').value = dados.fornecedor[i].bair
        document.getElementById('cidadeEditar').value = dados.fornecedor[i].cid
        document.getElementById('ufEditar').value = dados.fornecedor[i].est
        document.getElementById('nomeResponsavelEditar').value = dados.fornecedor[i].nomeRespon
        document.getElementById('contatoEditar').value = dados.fornecedor[i].cont
        document.getElementById('emailEditar').value = dados.fornecedor[i].mail
        document.getElementById('campoDeAtuacaoEditar').value = dados.fornecedor[i].atuaca

    
      }
    }

}


function salvarFornecedorEdita() {
  let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
  for (i = 1; i < dados.fornecedor.length; i++) {
    if (dados.fornecedor[i].cnpj == document.getElementById('CNPJEditar').value) {

      dados.fornecedor[i].nomeFant = document.getElementById('nomeFantasiaEditar').value
      dados.fornecedor[i].razaoSoc = document.getElementById('razaoSocialEditar').value
      dados.fornecedor[i].cnpj = document.getElementById('CNPJEditar').value
      dados.fornecedor[i].cp = document.getElementById('cepEditar').value
      dados.fornecedor[i].end = document.getElementById('enderecoEditar').value
      dados.fornecedor[i].num = document.getElementById('numeroEditar').value
      dados.fornecedor[i].bair = document.getElementById('bairroEditar').value
      dados.fornecedor[i].cid = document.getElementById('cidadeEditar').value
      dados.fornecedor[i].est = document.getElementById('ufEditar').value
      dados.fornecedor[i].nomeRespon = document.getElementById('nomeResponsavelEditar').value
      dados.fornecedor[i].cont = document.getElementById('contatoEditar').value
      dados.fornecedor[i].mail = document.getElementById('emailEditar').value
      dados.fornecedor[i].Atuaca = document.getElementById('campoDeAtuacaoEditar').value

      

    }
  }

  localStorage.setItem(sessionStorage.getItem(0), JSON.stringify(dados))
  dadosFornecedor()
}


