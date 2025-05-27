function registroParticipantes() {
  let participantes = [];
  let nombre = prompt("Ingrese un nombre (escriba 'salir' para terminar):");

  while (nombre && nombre.toLowerCase() !== "salir") {
    participantes.push(nombre);
    nombre = prompt("Ingrese un nombre (escriba 'salir' para terminar):");
  }

  console.log("Total de participantes: " + participantes.length);
  console.log("Lista: " + participantes.join(", "));

  if (participantes.length > 5) {
    console.log("¡Hay muchos participantes! 🎉");
  }
}

function simuladorCaja() {
  let productos = ["manzana", "pan", "leche"];

  for (let i = 0; i < 5; i++) {
    if (productos.length > 0) {
      let productoVendido = productos.pop();
      console.log("Producto vendido: " + productoVendido);
    } else {
      console.log("Sin stock");
    }
  }

  // Reposición opcional
  productos.push("arroz");
  productos.push("jugo");
  console.log("Productos repuestos: " + productos.join(", "));
}
