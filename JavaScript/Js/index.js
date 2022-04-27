const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");
const cidade = document.getElementById("cidade");
const uf = document.getElementById("uf");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const telefoneValue = telefone.value.trim();
  const cepValue = cep.value.trim();
  const cidadeValue = cidade.value.trim();
  const ufValue = uf.value.trim();

  if (usernameValue === "") {
    // mostrar o erro
    // adicionar a classe error
    errorValidation(username, "Preencha esse campo!");
  } else {
    // adicionar a classe success
    successValidation(username);
  }

  if (emailValue === "") {
    errorValidation(email, "Preencha esse campo!");
  } else {
    successValidation(email);
  }

  if (telefoneValue === "") {
    errorValidation(telefone, "Preencha esse campo!");
  } else if (telefoneValue.length < 9) {
    errorValidation(telefone, "Preencha seu telefone corretamente!");
  } else if (telefoneValue.length > 9) {
    errorValidation(telefone, "Preencha seu telefone corretamente!");
  } else {
    successValidation(telefone);
  }

  if (cepValue === "") {
    errorValidation(cep, "Preencha esse campo!");
  } else if (cepValue.length < 8) {
    errorValidation(cep, "Preencha seu cep corretamente!");
  } else if (cepValue.length > 8) {
    errorValidation(cep, "Preencha seu cep corretamente!");
  } else {
    successValidation(cep);
  }

  if (cidadeValue === "") {
    errorValidation(cidade, "Preencha esse campo!");
  } else {
    successValidation(cidade);
  }

  if (ufValue === "") {
    errorValidation(uf, "Preencha esse campo!");
  } else if (ufValue.length < 2) {
    errorValidation(uf, "Insira uma UF válida!");
  } else if (ufValue.length > 2) {
    errorValidation(uf, "Insira uma UF válida!");
  } else {
    successValidation(uf);
  }
}

function errorValidation(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function successValidation(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}
