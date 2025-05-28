function calculadoraPromedios() {
  let notas = [];
  let suma = 0;

  for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt("Ingrese la nota " + i + ":"));
    notas.push(nota);
    suma += nota;
  }

  let promedio = suma / notas.length;
  alert("Notas ingresadas: " + notas.join(", "));
  alert("Promedio: " + promedio.toFixed(2)); //redondear un número decimal a un número fijo

  if (promedio >= 4.0) {
    alert("Aprobado");
  } else {
    alert("Reprobado");
  }
}

function separarParesImpares() {
  let numeros = [];
  let pares = [];
  let impares = [];

  for (let i = 1; i <= 6; i++) {
    let numero = parseInt(prompt("Ingrese el número " + i + ":"));
    numeros.push(numero);
  }

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    } else {
      impares.push(numeros[i]);
    }
  }

  alert("Números ingresados: " + numeros.join(", "));
  alert("Números pares: " + pares.join(", "));
  alert("Números impares: " + impares.join(", "));
}
