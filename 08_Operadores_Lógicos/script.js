// Problema 6: Verificación de Acceso con Condiciones Múltiples
function problema6() {
    let edad = parseInt(prompt("Ingresa tu edad:"));
    let aceptaTerminos = confirm("¿Aceptas los términos de servicio?");

    if (edad >= 18 && aceptaTerminos) {
        alert("Acceso permitido");
    } else {
        alert("Acceso denegado");
    }
}

// Problema 7: Elegibilidad para un Descuento
function problema7() {
    let edad = parseInt(prompt("Ingresa tu edad:"));
    let esEstudiante = confirm("¿Eres estudiante?");

    if (edad < 21 && esEstudiante) {
        alert("Descuento aplicado");
    } else {
        alert("No tienes descuento");
    }
}

// Problema 8: Validación de Usuario y Contraseña con NOT
function problema8() {
    let usuario = prompt("Ingresa tu nombre de usuario:");
    let contraseña = prompt("Ingresa tu contraseña:");

    if (!usuario || !contraseña) {
        alert("Error: Debes ingresar usuario y contraseña");
    } else {
        alert("Inicio de sesión exitoso");
    }
}

// Problema 9: Encendido de una Máquina con Condiciones Lógicas
function problema9() {
    let energiaSuficiente = confirm("¿La máquina tiene suficiente energía?");
    let interruptorEncendido = confirm("¿El interruptor está encendido?");

    if (energiaSuficiente && interruptorEncendido) {
        alert("Máquina encendida");
    } else {
        alert("No se puede encender la máquina");
    }
}

// Problema 10: Acceso Restringido por Estado de Seguridad
function problema10() {
    let bloqueado = confirm("¿El usuario está bloqueado?");
    let tieneCredenciales = confirm("¿Tiene credenciales válidas?");

    if (bloqueado || !tieneCredenciales) {
        alert("Acceso denegado");
    } else {
        alert("Acceso permitido");
    }
}
