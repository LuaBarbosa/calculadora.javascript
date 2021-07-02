const form = document.querySelector("form");
const submit = document.getElementById("submit");

const anuncio = document.getElementById("anuncio");
const cliente = document.getElementById("cliente");
const inicio = document.getElementById("inicio");
const termino = document.getElementById("termino");
const investimento = document.getElementById("investimento");

//evento que dispara as validações
if (form.addEventListener) {
  form.addEventListener("submit", validar);
} else if (form.attachEvent) {
  form.attachEvent("onsubmit", validar);
}

function validar() {
  var anuncio = document.getElementById("anuncio");
  var cliente = document.getElementById("cliente");
  var inicio = document.getElementById("inicio");
  var termino = document.getElementById("termino");
  var investimento = document.getElementById("investimento");

  if (
    anuncio.value == "" ||
    cliente.value == "" ||
    inicio.value == "" ||
    termino.value == "" ||
    investimento.value == ""
  ) {
    alert("Favor preencher todos os campos!!");
    erro += 1;
  } else {
    alert("Cadastro criado com sucesso!!");
  }
}

//adicionando um cadastro
const anuncioTd = document.createElement("td");
const textoAnuncio = anuncio.nodeValue;
anuncioTd.appendChild(textoAnuncio);

const clienteTd = document.createElement("td");
const textoCliente = cliente.nodeValue;
clienteTd.appendChild(textoCliente);

const tabela = document.getElementById("tabela");
document.body.insertBefore(anuncioTd, clienteTd, tabela);
