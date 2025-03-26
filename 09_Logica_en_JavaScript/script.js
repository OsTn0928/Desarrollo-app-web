function parImpar() {
    let numero = parseInt(prompt("Ingresa un número:"));
    if (numero % 2 == 0) {
        alert("El número es par");
    } else {
        alert("El número es impar");
    }

    // Mostrar el resultado en la página
    document.getElementById("parImpar").innerText = "El número " + numero + " es " + ((numero % 2 == 0)? "par" : "impar");
}

function calcularIMC() {
    // Pedir al usuario que ingrese sus datos
    let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
    let altura = parseFloat(prompt("Ingresa tu altura en metros:"));
    let imc =  peso / (altura * altura);
    // Mostrar el resultado en la página
    alert(prompt("Tu IMC es: " + imc));
}

function calcularNotas() {
    let nota1 = parseFloat(prompt("Ingresa la primera nota:"));
    let nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingresa la tercera nota:"));
    let promedio = (nota1 + nota2 + nota3) / 3;
    // Mostrar el resultado en la página
    alert("Tu promedio es: " + promedio);
}


