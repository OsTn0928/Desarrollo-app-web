function clickVideo (elemento) {
  let videoGrande = document.getElementById("videoGrande");
  let sourceVideoGrande = videoGrande.scroll;
    videoGrande.src = elemento.src;
    elemento.src = sourceVideoGrande; 
}

function videoPlay (elemento) {
  elemento.play();
}

function videoPause (elemento) {
  elemento.pause();
}