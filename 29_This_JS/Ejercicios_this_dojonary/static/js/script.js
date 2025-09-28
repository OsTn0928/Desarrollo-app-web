
function sumarLike(btn) {
  // 1) Si no llegó un botón, salimos
  if (!btn) return;

  // 2) parseInt lee el número inicial del texto (por ejemplo "23 Likes" -> 23)
  let n = parseInt(btn.textContent, 10);

  // 3) Si parseInt no encontró número, n será NaN -> lo ponemos a 0
  if (isNaN(n)) n = 0;

  // 4) sumamos 1
  n = n + 1;

  // 5) actualizamos el texto del botón (singular/plural)
  if (n === 1) {
    btn.textContent = n + " Like";
  } else {
    btn.textContent = n + " Likes";
  }
}

function eliminarbtn(element) {
    element.remove();
}

function pasarLogInaLogOut(element) {
    if (element.innerText == "LogIn") {
        element.innerText = "LogOut"
    }else{
        element.innerText = "LogIn"
    }
}