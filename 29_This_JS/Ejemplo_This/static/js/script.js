// Crear funcion de prueba This
function example(elemento) {
    console.log("elemento clickeado", elemento);
}

// Creacion de funcion TurnOff
function turnOff(element) {
    if (element.innerText == "On") {
        element.innerText = "Off"
    }else{
        element.innerText = "On"
    }
}


//Funcion para eliminar boton
function hide(element) {
    element.remove();
}


