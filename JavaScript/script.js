function calcularMedia(notas) {
  let soma = 0;
  for (c = 0; c < notas.length; c++) {
    soma += notas[c];
  }

  media = soma / notas.length;

  return media;
}

let media; // escopo global

function aprovacao(notas) {
  let media = calcularMedia(notas); // escopo da função

  let condicao = media >= 8 ? "aprovado" : "reprovado";

  return "Média: " + media + " - Resultado: " + condicao;
}

// Função Recursivas

function contagemRegressiva(numero) {
  console.log(numero);

  let proximoNumero = numero - 1;

  if (proximoNumero > 0) contagemRegressiva(proximoNumero);
}

// contagemRegressiva(50);

/*
 * Formulário envio de dados para cálculo da média
 */
const formulario1 = document.getElementById("formulario-01");

if (formulario1)
  formulario1.addEventListener("submit", function (evento) {
    evento.preventDefault();
    evento.stopPropagation();

    if (this.getAttribute("class").match(/erro/)) {
      return false;
    }

    let dados = new FormData(this);

    let notas = [];

    for (let key of dados.keys()) {
      let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

      if (!isNaN(numero)) {
        notas.push(numero);
      }
    }

    console.log(notas);

    texto = aprovacao(notas);

    document.getElementById("resultado").innerHTML = texto;
  });

// função para preenchimento do formulário //

function validaCampo(elemento) {
  elemento.addEventListener("focusout", function (event) {
    event.preventDefault();

    if (this.value == "") {
      document.querySelector(".mensagem").innerHTML =
        "verifique o preenchimento dos campos em destaque";
      this.classList.add("erro");
      this.parentNode.classList.add("erro");
      return false;
    } else {
      document.querySelector(".mensagem").innerHTML = "";
      this.classList.remove("erro");
      this.parentNode.classList.remove("erro");
    }
  });
}

function validaCampoNumerico(elemento) {
  elemento.addEventListener("focusout", function (event) {
    event.preventDefault();

    let numero = this.value.match(/^[\d]5-[\d]3/)
      ? this.value.replace(/-/, "")
      : this.value;

    if (numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10) {
      document.querySelector(".mensagem").innerHTML = "";
      this.classList.remove("erro");
      this.parentNode.classList.remove("erro");
    } else {
      document.querySelector(".mensagem").innerHTML =
        "verifique o preenchimento dos campos em destaque";
      this.classList.add("erro");
      this.parentNode.classList.add("erro");
      return false;
    }
  });
}

function validaEmail(elemento) {
  elemento.addEventListener("focusout", function (event) {
    event.preventDefault();

    const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
    if (this.value.match(emailValido)) {
      document.querySelector(".mensagem").innerHTML = "";
      this.classList.remove("erro");
      this.parentNode.classList.remove("erro");
    } else {
      document.querySelector(".mensagem").innerHTML =
        "verifique o preenchimento dos campos em destaque";
      this.classList.add("erro");
      this.parentNode.classList.add("erro");
      return false;
    }
  });
}

function validaUf(elemento) {
  elemento.addEventListener("focusout", function (event) {
    event.preventDefault();

    let estados = new Array(26);

    estados[0] = "AC";
    estados[1] = "AL";
    estados[2] = "AM";
    estados[3] = "AP";
    estados[4] = "BA";
    estados[5] = "CE";
    estados[6] = "ES";
    estados[7] = "GO";
    estados[8] = "MA";
    estados[9] = "MG";
    estados[10] = "MS";
    estados[11] = "MT";
    estados[12] = "PA";
    estados[13] = "PB";
    estados[14] = "PE";
    estados[15] = "PI";
    estados[16] = "PR";
    estados[17] = "RJ";
    estados[18] = "RN";
    estados[19] = "RO";
    estados[20] = "RR";
    estados[21] = "RS";
    estados[22] = "SC";
    estados[23] = "SE";
    estados[24] = "SP";
    estados[25] = "TO";

    let estUf = estados.length;

    if (estUf.value == "") {
      document.querySelector(".mensagem").innerHTML =
        "verifique o preenchimento dos campos em destaque";
      this.classList.add("erro");
      this.parentNode.classList.add("erro");
    } else {
      document.querySelector(".mensagem").innerHTML = "";
      this.classList.remove("erro");
      this.parentNode.classList.remove("erro");
    }
  });
}

let camposObrigatorios = document.querySelectorAll("input.obrigatorio");
let camposNumericos = document.querySelectorAll("input.numero");
let camposEmail = document.querySelectorAll("input.email");
let camposUf = document.querySelectorAll("input.uf");

for (let emFoco of camposObrigatorios) {
  validaCampo(emFoco);
}

for (let emFoco of camposNumericos) {
  validaCampoNumerico(emFoco);
}

for (let emFoco of camposEmail) {
  validaEmail(emFoco);
}

for (let emFoco of camposUf) {
  validaUf(emFoco);
}
