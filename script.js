const form = document.querySelector(".form");
const InputGrupo = document.getElementsByTagName("input");
const Erro = document.getElementsByTagName("p");
const InputRadio = document.getElementsByName("supo");
const Message = document.getElementsByTagName("textarea");
const btn = document.querySelector("button");
const CodigoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault;
  validarFirstName();
  validarLastName();
  validarEmail();
  validarRadio();
  validarCheckbox();

  // Cria um objeto com os dados do formulário
const dadosFormulario = {
  nome: '',
  lastName:'',
  email: '',
  QueryType:'checado'
};

// Armazena os dados no localStorage como uma string JSON
localStorage.setItem('form', JSON.stringify(form));
});


function setError(index) {
  InputGrupo[index].style.border = "1px solid #d73c3c";
  Erro[index].style.display = "block";
}
function removeError(index) {
  InputGrupo[index].style.border = "";
  Erro[index].style.display = "";
}
function validarFirstName() {
  if (InputGrupo[0].value == "") {
    setError(0);
  } else {
    removeError(0);
  }
  validarLastName();
}
function validarLastName() {
  if (InputGrupo[1].value == "") {
    setError(1);
  } else {
    removeError(1);
  }
  validarEmail();
}
function validarEmail() {
  if (CodigoRegex.test(InputGrupo[2].value)) {
    removeError(2);
  } else {
    setError(2);
  }
  validarRadio();
}
function validarRadio(RadioValor) {
  if (InputGrupo[3].checked == "" && InputGrupo[4].checked == "") {
    setError(3);
    setError(4);
  } else {
    removeError(3);
    removeError(4);
    RadioValor = "";
    if (InputRadio[0].checked) {
      RadioValor = "General Enquiry";
    } else {
      RadioValor = "Support Request";
    }
  }
  validarCheckbox();
}
function validarCheckbox() {
  if (InputGrupo[5].checked) {
    removeError(6);
  } else {
    setError(6);
  }
}

btn.addEventListener("click", validarFirstName);
