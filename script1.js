/* --------------------------- estado por defecto --------------------------- */

const estadoUsuario = {
  email: "",
  password: "",
  rol: "",
  terminos: false,
};


const estadoErroresOk = {
  email: false,
  password: false,
  rol: false,
  terminos: false,
};

/* ---------------------------------- nodos --------------------------------- */


const formulario = document.forms[0];

//inputs
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputRol = document.querySelector("#rol");
const inputTerminos = document.querySelector("#terminos");

//errors
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const rolError = document.querySelector("#rolError");
const terminosError = document.querySelector("#terminosError");



function mostrarErrores() {

  estadoErroresOk.email
    ? emailError.classList.remove("visible")
    : emailError.classList.add("visible");

  estadoErroresOk.password
    ? passwordError.classList.remove("visible")
    : passwordError.classList.add("visible");

  estadoErroresOk.rol
    ? rolError.classList.remove("visible")
    : rolError.classList.add("visible");

  estadoErroresOk.terminos
    ? terminosError.classList.remove("visible")
    : terminosError.classList.add("visible");
}


formulario.addEventListener("change", (e) => {

  estadoUsuario.email = inputEmail.value;
  estadoUsuario.password = inputPassword.value;
  estadoUsuario.rol = inputRol.value;
  estadoUsuario.terminos = inputTerminos.checked;

  estadoErroresOk.email = validarEmail(estadoUsuario.email);
  estadoErroresOk.password = validarPassword(estadoUsuario.password);
  estadoErroresOk.rol = validarRol(estadoUsuario.rol);
  estadoErroresOk.terminos = validarTerminos(estadoUsuario.terminos);


  mostrarErrores();
});


function validarEmail(email) {
  let resultado = false;


  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  if (regex.test(email)) {
    resultado = true;
  }
  return resultado;
}

function validarPassword(password) {
  let resultado = false;


  if (
    !password.includes(" ") &&
    !password.includes("@") &&
    password.length > 6
  ) {
    resultado = true;
  }

  return resultado;
}

function validarRol(rol) {
  let resultado = false;


  if (rol === "frontend" || rol === "backend") {
    resultado = true;
  }

  return resultado;
}

function validarTerminos(terminos) {
  let resultado = false;


  if (terminos) {
    resultado = true;
  }
  return resultado;
}




formulario.addEventListener("submit", (e) => {

  e.preventDefault();

  console.log(estadoUsuario);
  console.log(estadoErroresOk);

  if (
    estadoErroresOk.email &&
    estadoErroresOk.password &&
    estadoErroresOk.rol &&
    estadoErroresOk.terminos
  ) {
    navegarPaginaExito();

  }
});



function navegarPaginaExito() {
  //   desarrollar la funcion aqui
  const btnSubmit = document.querySelector("button");

  btnSubmit.setAttribute("disabled", true);
  btnSubmit.innerText = "Cargando...";

  localStorage.setItem("user", JSON.stringify(estadoUsuario));

  setTimeout(() => {
    location.replace("./usuario.html");
  }, 3000);
}
