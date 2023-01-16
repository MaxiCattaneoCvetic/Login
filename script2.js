
window.addEventListener("load", (e) => {
  const user = recuperarDataStorage();

  renderizarElementos(user);
  botonCerrarSesion()
});

function recuperarDataStorage() {
  const datosEnJSON = localStorage.getItem("user");

  const datosParseados = JSON.parse(datosEnJSON);

  return datosParseados;
}

function renderizarElementos(objeto) {
  const email = document.querySelector("#email");
  const perfil = document.querySelector("#perfil");

  email.innerText = objeto.email;
  perfil.innerText = objeto.rol;
}


function botonCerrarSesion() {
  const divUser = document.querySelector(".user")
  const boton= document.createElement('button');
  divUser.appendChild(boton);
  boton.innerText = "Cerrar Sesion"
  boton.classList.add("boton");
  boton.addEventListener('click', ()=>{
  const confir = confirm("¿Seguro desea cerrar sesión?")
  if (confir){
    localStorage.clear();
    location.replace("./index.html")
}
  })
  }
  