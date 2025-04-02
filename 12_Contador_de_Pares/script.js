console.log("Conectado correctamente.")

//funcion para calcular pares dados por el usuario
function funcionPares(){
    //definicion de las variables utilizadas para la funcion
    let arrayNumer = prompt("ingrese numeros separados por una coma: ");
    //el arrayFin se utiliza para dividir los numeros de arrayNumer con un split y se le da el valor con lo que se quiera dividir con (" ")
    let arrayFin = arrayNumer.split(",");
    //Lista que se utiliza para guardar datos
    let arrayResult = [];
    //console.log(arrayFin.join( " - ")); imprime en consola para revisar el codigo
    let pares = 0;
    //se usa para definir la longitud de arrayFin
    arrayFin.length;
   // console.log(arrayFin.length) imprime en consola para revisar el codigo
   //bucle for que se repite si i es menor a la longitud de length 
    for(let i = 0; i < arrayFin.length; i++){
        if (arrayFin[i] % 2 === 0){
             arrayResult.push(arrayFin[i])
             console.log(arrayResult.join(" - "));
        }
    }
alert(`los numeros pares entre los numeros dados son: ${arrayResult.join(" - ")}`);
}
