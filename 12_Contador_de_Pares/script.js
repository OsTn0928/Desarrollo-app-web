// Muestra un mensaje en la consola para confirmar que el archivo JavaScript se cargó correctamente.
console.log("Conectado correctamente."); 

// Función principal que se encarga de identificar y mostrar los números pares que el usuario ingresa.
function funcionPares() {

    // Se solicita al usuario que ingrese varios números separados por comas (ej: 2,5,6,7)
    let arrayNumer = prompt("Ingrese números separados por una coma: ");

    // Se divide el string recibido por el usuario en un array, utilizando la coma como separador.
    // Ejemplo: "2,4,5" → ["2", "4", "5"]
    let arrayFin = arrayNumer.split(",");

    // Se crea un array vacío para guardar únicamente los números pares que se encuentren.
    let arrayResult = [];

    // Variable declarada pero no utilizada; sirve (potencialmente) para contar pares.
    let pares = 0;

    // Se recorre todo el array obtenido con el split usando un bucle for.
    for (let i = 0; i < arrayFin.length; i++) {

        // Se verifica si el número actual (convertido a entero) es par (divisible por 2)
        if (arrayFin[i] % 2 === 0) {

            // Si es par, se agrega al array de resultados.
            arrayResult.push(arrayFin[i]);

            // Se imprime en consola el contenido actual del array de resultados, separado por guiones.
            console.log(arrayResult.join(" - "));
        }
    }

    // Finalmente, se muestra una alerta con los números pares encontrados, separados por guiones.
    alert(`Los números pares entre los números dados son: ${arrayResult.join(" - ")}`);
}
