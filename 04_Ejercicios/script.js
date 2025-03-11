// Vinculación correcta - Esto es para asegurarse de que el archivo JavaScript está correctamente conectado al HTML.
console.log("Vinculado correctamente...");

// Ejercicio 1: Declaración de variables
function declararVariables() { // Declara una función llamada declararVariables.
    var ahora = new Date().getFullYear(); // Obtiene el año actual utilizando la función Date() y lo guarda en la variable ahora.
    var fecha_nac = prompt("Ingrese su año de nacimiento:"); // Pide al usuario que ingrese su año de nacimiento y lo guarda en fecha_nac como texto.
    var edad = ahora - fecha_nac; // Calcula la edad restando el año ingresado al año actual.
    alert("Su edad actual es: " + edad + " años."); // Muestra un mensaje al usuario con la edad calculada.
}

// Ejercicio 2: Asignación de valores
function asignarValores() { // Declara una función llamada asignarValores.
    var var1 = prompt("Ingrese un valor para var1:"); // Pide al usuario que ingrese un valor y lo guarda en var1.
    var var2 = var1; // Copia el valor de var1 a var2. Ambas variables ahora contienen el mismo dato.
    alert("El valor de var2 es: " + var2); // Muestra un mensaje indicando el contenido de var2.
}

// Ejercicio 3: Operaciones matemáticas
function realizarOperaciones() { // Declara una función llamada realizarOperaciones.
    var num1 = parseFloat(prompt("Ingrese el primer número (num1):")); // Pide al usuario un número, lo convierte a decimal y lo guarda en num1.
    var num2 = parseFloat(prompt("Ingrese el segundo número (num2):")); // Pide otro número y lo guarda en num2.
    var num3 = parseFloat(prompt("Ingrese el tercer número (num3):")); // Pide un tercer número y lo guarda en num3.

    var suma = num1 + num2 + num3; // Suma los tres números y lo guarda en la variable suma.
    var resta = num3 - num1; // Resta el primer número al tercer número.
    var multiplicacion = num2 * num3; // Multiplica el segundo número por el tercero.
    var division = num1 / 120; // Divide el primer número entre 120.

    // Muestra todos los resultados de las operaciones en un solo mensaje.
    alert("Resultados:\n- Suma: " + suma + "\n- Resta: " + resta + "\n- Multiplicación: " + multiplicacion + "\n- División: " + division);
}

// Ejercicio 4: Manipulación de cadenas
function manipularCadenas() { // Declara una función llamada manipularCadenas.
    var direccion = prompt("Ingrese su dirección:"); // Pide al usuario que ingrese su dirección y la guarda en direccion.
    var n_casa = prompt("Ingrese su número de casa:"); // Pide al usuario que ingrese su número de casa y lo guarda en n_casa.

    // Construye un mensaje combinando las dos variables ingresadas.
    var mensaje = "Vive en " + direccion + ", número " + n_casa + "."; 
    var longitudMensaje = mensaje.length; // Calcula cuántos caracteres tiene el mensaje completo.
    var antepenultimo = mensaje.charAt(longitudMensaje - 3); // Encuentra el antepenúltimo carácter del mensaje.

    // Muestra el mensaje completo, la longitud del mensaje y el antepenúltimo carácter.
    alert("Mensaje: " + mensaje + "\nLongitud del mensaje: " + longitudMensaje + "\nAntepenúltimo carácter: " + antepenultimo);
}
