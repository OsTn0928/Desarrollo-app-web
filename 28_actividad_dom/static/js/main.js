const form = document.getElementById("formEstudiante");
const mensajeError = document.getElementById("mensajeError");
const mensajeResultado = document.getElementById("mensajeResultado");
const resumen = document.getElementById("resumen");
const limpiarBtn = document.getElementById("limpiar");

let registros = [];

// Función para capitalizar nombre
function capitalizarNombre(nombre) {
  return nombre.trim().split(" ")
    .filter(p => p !== "")
    .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join(" ");
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  mensajeError.textContent = "";
  mensajeResultado.textContent = "";

  // Captura de datos
  let nombre = document.getElementById("nombre").value;
  let edad = parseInt(document.getElementById("edad").value);
  let curso = document.getElementById("curso").value;
  let jornada = document.querySelector('input[name="jornada"]:checked');
  let aceptaReglamento = document.getElementById("aceptaReglamento").checked;

  // Validaciones con if y &&
  if (nombre.trim().length < 2) {
    mensajeError.textContent = "El nombre debe tener al menos 2 caracteres.";
    return;
  }

  if (isNaN(edad) || edad < 14 || edad > 100) {
    mensajeError.textContent = "La edad debe estar entre 14 y 100 años.";
    return;
  }

  if (curso === "") {
    mensajeError.textContent = "Debe seleccionar un curso.";
    return;
  }

  if (!jornada) {
    mensajeError.textContent = "Debe seleccionar una jornada.";
    return;
  }

  if (!aceptaReglamento) {
    mensajeError.textContent = "Debe aceptar el reglamento para continuar.";
    return;
  }

  // Normalizar nombre
  nombre = capitalizarNombre(nombre);
  jornada = jornada.value;

  // Crear objeto y guardarlo
  let nuevoEstudiante = { nombre, edad, curso, jornada };
  registros.push(nuevoEstudiante);

  // Mensaje de éxito
  mensajeResultado.textContent = 
    `Bienvenido/a ${nombre}. Edad: ${edad}, Curso: ${curso}, Jornada: ${jornada}.`;

  // Contar registros por jornada
  let contadorM = 0, contadorT = 0;
  for (let i = 0; i < registros.length; i++) {
    if (registros[i].jornada === "Mañana") {
      contadorM++;
    } else if (registros[i].jornada === "Tarde") {
      contadorT++;
    }
  }

  resumen.textContent = `Registrados: ${contadorM} en Mañana, ${contadorT} en Tarde.`;

  // Resetear formulario
  form.reset();
});

limpiarBtn.addEventListener("click", function() {
  form.reset();
  mensajeError.textContent = "";
  mensajeResultado.textContent = "";
  resumen.textContent = "";
  registros = [];
});
