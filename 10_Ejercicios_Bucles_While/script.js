function imprimirWhile() {
    let contador = 1;
    while (contador <= 4) {
        console.log(contador);
        contador++;
    }
    //mostrar en pantalla el resultado
    alert("Se ha terminado de imprimir los números del 1 al 5");
}

function cuentaRegresivaWhile() {
    let count = 10;
    let array = [];
    while (count >= 1) {
        array.push(count);
        count--;
    }
    alert(`Cuenta regresiva: ${array.join(', ')}`);
}

function cuentaRegresivaFor() {
    let count = 10;
    let array = [];
    for (let i = count; i >= 1; i--) {
        array.push(i);
    }
    alert(`Cuenta regresiva: ${array.join(', ')}`);
}

function sumarPrimerosFiveFor() {
    let suma = 0;
    for (let i = 1; i <= 4; i++) {
        suma += i;
    }
    alert("La suma de los primeros 5 números es: " + suma);
}
