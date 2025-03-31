function generarTabla() {
    let num = parseInt(document.getElementById("numero").value);
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i}\n`;
    }
    document.getElementById("resultadoTabla").textContent = resultado;
}

function sumarNumeros() {
    let n = parseInt(document.getElementById("cantidad").value);
    let suma = 0;
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
        suma += numero;
    }
    document.getElementById("resultadoSuma").textContent = `Suma total: ${suma}`;
}

function mostrarPares() {
    let inicio = parseInt(document.getElementById("inicio").value);
    let fin = parseInt(document.getElementById("fin").value);
    let pares = [];
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    document.getElementById("resultadoPares").textContent = `Números pares: ${pares.join(", ")}`;
}