function clickVideo(elemento) {
  let videoGrande = document.getElementById("videoGrande");
  let sourceVideoGrande = videoGrande.src;
  videoGrande.src = elemento.src;
  elemento.src = sourceVideoGrande;

  //Cmabio de texto
  const textoMain = document.getElementById("textoMain");
  let contentTextMain = textoMain.textContent
  const textoPequeno = elemento.nextElementSibling;
  let contentTextPequeno = textoPequeno.textContent;

  textoMain.textContent = contentTextPequeno; 
  textoPequeno.textContent = contentTextMain;

}

function videoPlay(elemento) {
  elemento.play();
}

function videoPause(elemento) {
  elemento.pause();
}

function pasarLogInaLogOut(boton) {
  if (boton.innerText === "Login") {
    boton.innerText = "Logout";
  } else {
    boton.innerText = "Login";
  }
}

function pasarSuscribirASuscrito(boton) {
  if (boton.innerText === "Suscribirse") {
    boton.innerText = "Suscrito";
    boton.style.backgroundColor = "gray";
  } else {
    boton.innerText = "Suscribirse";
    boton.style.backgroundColor = "#9900ff";
  }
}

