// script.js
const resultado = document.getElementById("resultado");

function mostrar(texto) {
  resultado.innerHTML = `<pre>${texto}</pre>`;
}

function ejercicio1() {
  let compras = [];
  compras.push("pan", "leche", "huevos");
  mostrar("Ejercicio 1: " + JSON.stringify(compras));
}

function ejercicio2() {
  let compras = ["pan", "leche", "huevos"];
  let eliminado = compras.pop();
  mostrar("Ejercicio 2: Eliminado => " + eliminado);
}

function ejercicio3() {
  let colores = ["rojo", "azul"];
  colores.unshift("amarillo");
  mostrar("Ejercicio 3: " + JSON.stringify(colores));
}

function ejercicio4() {
  let colores = ["amarillo", "rojo", "azul"];
  let eliminado = colores.shift();
  mostrar("Ejercicio 4: Eliminado => " + eliminado);
}

function ejercicio5() {
  let numeros = [10, 20, 30];
  numeros.push(40);
  numeros.shift();
  numeros.unshift(5);
  numeros.pop();
  mostrar("Ejercicio 5: " + JSON.stringify(numeros));
}

function ejercicio6() {
  let orden = [];
  orden.unshift(3);
  orden.unshift(2);
  orden.unshift(1);
  mostrar("Ejercicio 6: " + JSON.stringify(orden));
}

function ejercicio7() {
  let historial = [];
  historial.push("Mensaje1", "Mensaje2", "Mensaje3");
  let eliminado = historial.pop();
  mostrar("Ejercicio 7: Eliminado => " + eliminado);
}

function ejercicio8() {
  let cola = ["Cliente1", "Cliente2", "Cliente3"];
  cola.shift();
  cola.push("Cliente4");
  mostrar("Ejercicio 8: " + JSON.stringify(cola));
}

function ejercicio9() {
  let nombres = ["Pedro", "Juan", "Luis"];
  nombres.pop();
  nombres.unshift("Mateo");
  nombres.push("Ana");
  mostrar("Ejercicio 9: " + JSON.stringify(nombres));
}

function ejercicio10() {
  let pila = [];
  pila.push("a", "b", "c");
  let pop1 = pila.pop();
  let pop2 = pila.pop();

  let colaNueva = [];
  colaNueva.push("x", "y", "z");
  let shift1 = colaNueva.shift();
  let shift2 = colaNueva.shift();

  mostrar(`Ejercicio 10:
Pila eliminados: ${pop1}, ${pop2}
Cola eliminados: ${shift1}, ${shift2}`);
}

function ejercicio11() {
  let dias = ["lunes", "miércoles", "jueves"];
  dias.splice(1, 0, "martes");
  dias.push("viernes");
  mostrar("Ejercicio 11: " + JSON.stringify(dias));
}

function ejercicio12() {
  let personas = ["Carlos", "María", "Luis", "Ana", "Sofía"];
  personas.shift(); // Carlos fuera
  personas.pop();   // Sofía fuera
  personas.pop();   // Ana fuera
  personas.push("Camila");
  personas.unshift("Pedro");
  mostrar("Ejercicio 12: " + JSON.stringify(personas));
}

function ejercicio13() {
  let tareas = ["comer", "estudiar", "dormir", "jugar", "ver TV", "navegar"];
  tareas.splice(2, 4, "lavar la ropa", "organizar escritorio");
  mostrar("Ejercicio 13: " + JSON.stringify(tareas));
}