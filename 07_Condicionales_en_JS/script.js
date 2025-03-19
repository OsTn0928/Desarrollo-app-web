// 1️⃣ Problema 2: Evaluación de Temperatura
function evaluarTemperatura() {
    let temperatura = parseInt(prompt("Ingresa la temperatura actual en grados Celsius:"));

    if (temperatura < 10) {
        alert("Hace frío");
    } else if (temperatura >= 10 && temperatura < 25) {
        alert("La temperatura es agradable");
    } else {
        alert("Hace calor");
    }
}

// 2️⃣ Problema 3: Verificación de Usuario y Contraseña
function verificarUsuario() {
    let nombreUsuario = prompt("Ingresa el nombre de usuario:");
    let contraseña = prompt("Ingresa la contraseña:");

    if (nombreUsuario === "usuario123" && contraseña === "secreto") {
        alert("Acceso concedido");
    } else {
        alert("Acceso denegado");
    }
}

// 3️⃣ Problema 4: Determinar el Signo de un Número
function determinarSigno() {
    let numero = parseInt(prompt("Ingresa un número:"));

    if (numero > 0) {
        alert("El número es positivo");
    } else if (numero < 0) {
        alert("El número es negativo");
    } else {
        alert("El número es cero");
    }
}

// 4️⃣ Problema 5: Evaluación de Puntuación en un Juego
function evaluarPuntuacion() {
    let puntuacion = parseInt(prompt("Ingresa la puntuación obtenida en el juego:"));

    if (puntuacion >= 90) {
        alert("Excelente");
    } else if (puntuacion >= 70 && puntuacion <= 89) {
        alert("Buen trabajo");
    } else {
        alert("Necesitas mejorar");
    }
}
