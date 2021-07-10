sessionStorage.key(1)

function perfil() {
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


function infoPerfil() {
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    document.getElementById('infoModalPerfil').innerHTML = `
    
    <p>Nome: ${dados.nome}</p>
    <p>Email: ${dados.email}</p>
    <p>contato: ${dados.infoUsuario.contato}</p>
    <p>cpf:${dados.infoUsuario.cpj}</p>
    `
}
//

jQuery(function ($) {
    $("#exportButton").click(function () {
        var dataSource = shield.DataSource.create({
            data: "#exportTable",
            schema: {
                type: "table",
                fields: {
                    Name: { type: String },
                    Age: { type: String },
                    Email: { type: String }
                }
            }
        });

        dataSource.read().then(function (data) {
            var pdf = new shield.exp.PDFDocument({
                author: "PrepBootstrap",
                created: new Date()
            });
            // html documento



            // fim

            pdf.saveAs({
                fileName: "Relatório"
            });
        });
    });
});



function dadosRelatorio() {

    let selectHtml = document.getElementById('relatorioFornecedor')
    let dados = JSON.parse(localStorage.getItem(sessionStorage.getItem(0)))
    let txt = ""
    for (i = 1; i < dados.relatorios.length; i++) {
        txt = txt +

            `
  
        <tr>
        <td id="nomeFantasiaRelatorio">${dados.relatorios[i].nomeFantasiaRelat}</td>
    </tr>
    <tr>
        <td id="cnpjFornecedorRelat">${dados.relatorios[i].cnpjFornecedor}</td>
    </tr>
    <tr>
        <td id="responsavelRelatorio">${dados.relatorios[i].responsavelRelat}</td>
    </tr>
    <tr>
        <td id="contatoRelatorio">${dados.relatorios[i].contatoRelat}</td>
    </tr>
    <tr>
        <td id="mailRelatorio">${dados.relatorios[i].mailRelat}</td>
    </tr>

      
      `
    }

    selectHtml.innerHTML = txt
}




window.onload = () => {
    dadosRelatorio()
}

function sairSistema() {
    sessionStorage.setItem(0,"")
    location.href = "../index.html"
}

function demoFromHTML() {
    let pdf = new jsPDF('p', 'pt', 'A4');

    source = $('#content')[0];
    specialElementHandlers = {
        '#bypassme': function (element, renderer) {
            return true
        }
    };
    margins = {
        top: 20,
        bottom: 60,
        left: 20
    };

    pdf.fromHTML(
        source,
        margins.left,
        margins.top, {
        'width': 500,
        'elementHandlers': specialElementHandlers
    },

        function (dispose) {
            pdf.save('relatorio.pdf');
        }, margins
    );
}


window.onload = () => {

    perfil()
    infoPerfil()

}