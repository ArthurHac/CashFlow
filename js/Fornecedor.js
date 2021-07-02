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
