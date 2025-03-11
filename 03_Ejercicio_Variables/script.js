// Variables
let numeroEntero = 42;
let numeroDecimal = 3.14;
let cadenaTexto = "Hola, soy una cadena de texto";
let booleano = true;
let objeto = { nombre: "Vicente", edad: 17, ocupacion: "Estudiante" };
let indefinida;
let nulo = null;
let array = ["papa",  "pollo",  "cabellos de angel",  "Zapallo"];
let matriz = [[1, 9],[5, 10]];

// Función para realizar una operación simple
function operacion(a, b) {
    return a + b;
}

// Funciones para mostrar cada variable

function mostrarMatriz() {
    alert("Lista dentro de una lista: " + matriz[1],[0]);
}

function mostrarArray() {
    alert("Receta Lista: " + array)
}

function mostrarNumeroEntero() {
    alert("Número Entero: " + numeroEntero);
}

function mostrarNumeroDecimal() {
    alert("Número Decimal: " + numeroDecimal);
}

function mostrarCadenaTexto() {
    alert("Cadena de Texto: " + cadenaTexto);
}

function mostrarBooleano() {
    alert("Booleano: " + booleano);
}

function mostrarObjeto() {
    alert("Objeto: " + JSON.stringify(objeto));
}

function mostrarIndefinida() {
    alert("Indefinida: " + indefinida);
}

function mostrarNulo() {
    alert("Nulo: " + nulo);
}

function mostrarOperacion() {
    let resultado = operacion(5, 7);
    alert("Resultado de la operación (5 + 7): " + resultado);
}
