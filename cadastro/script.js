const form = document.getElementById("form");
const submit = document.getElementById("submit");

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
  var erro = "";

  if (anuncio.value == "") {
    alert("Favor preencher com o nome do anuncio");
    erro += 1;
  } else {
  }
  if (cliente.value == "") {
    alert("Favor preencher com o nome do Cliente");
    erro += 1;
  } else {
  }
  if (inicio.value == "") {
    alert("Favor preencher a data de inicio");
    erro += 1;
  } else {
  }
  if (termino.value == "") {
    alert("Favor preencher a data de termino");
    erro += 1;
  } else {
  }

  if (investimento.value == "") {
    alert("Favor preencher o valor a ser investido no dia");
    erro += 1;
  } else {
    alert("Cadastro criado com sucesso!!");
  }
}
