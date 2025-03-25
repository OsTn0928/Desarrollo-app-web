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
    // Pedir al usuario que ingrese las notas y convertirlas a enteros
    let nota1 = parseInt(prompt("Ingresa la primera nota (1-7):"));
    let nota2 = parseInt(prompt("Ingresa la segunda nota (1-7):"));
    let nota3 = parseInt(prompt("Ingresa la tercera nota (1-7):"));

    // Verificar que las entradas sean números válidos entre 1 y 7
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ||
        nota1 < 1 || nota1 > 7 || 
        nota2 < 1 || nota2 > 7 || 
        nota3 < 1 || nota3 > 7) {
        document.getElementById("resultado").innerText = "❌ Error: Ingresa notas válidas entre 1 y 7.";
        return; // Salir de la función si hay un error
    }

    // Calcular el promedio
    let promedio = (nota1 + nota2 + nota3) / 3;

    // Determinar si aprueba o reprueba
    let mensaje = (promedio >= 4) ? "✅ Aprobado con promedio: " : "❌ Reprobado con promedio: ";
    
    // Mostrar el resultado en la página
    document.getElementById("resultado").innerText = mensaje + promedio.toFixed(2);
}


