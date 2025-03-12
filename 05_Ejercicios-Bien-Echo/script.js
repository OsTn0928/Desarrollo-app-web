// Vinculación correcta
console.log("Vinculado correctamente...")

// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.
function declararVariables() {
    let ahora = 2025;
    let fecha_nac = parseInt(prompt("Ingresar tu año de nacimiento:"));
    let edad = ahora - fecha_nac;
    alert(`Tu edad es: ${edad} años.`);
}

// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
function asignarValores() {
    let var1 = prompt("Ingresa un valor para var1:");
    let var2 = var1; // Asignación de valores
    alert(`El valor de var2 es: ${var2}`);
}

// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
function realizarOperaciones() {
    let num1 = parseInt(prompt("Ingresar el primer número:"));
    let num2 = parseInt(prompt("Ingresar el segundo número:"));
    let num3 = parseInt(prompt("Ingresar el tercer número:"));

    let suma = num1 + num2 + num3;
    let resta = num3 - num1;
    let multiplicacion = num2 * num3;
    let division = num1 / 120;

    alert(`Resultados:\nSuma: ${suma}\nResta: ${resta}\nMultiplicación: ${multiplicacion}\nDivisión: ${division}`);
}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
// Luego, muestra la longitud del mensaje y el antepenúltimo carácter en el mensaje.
function manipularCadenas() {
    let direccion = prompt("Ingresar tu dirección:");
    let n_casa = prompt("Ingresar el número de tu casa:");
    let mensaje = `Vives en ${direccion}, número ${n_casa}.`;
    let longitud = mensaje.length;
    let antepenultimo = mensaje.charAt(longitud - 3);

    alert(`Mensaje construido: ${mensaje}\nLongitud del mensaje: ${longitud}\nAntepenúltimo carácter: ${antepenultimo}`);
}
