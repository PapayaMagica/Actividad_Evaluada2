var mensaje = document.getElementById("mensaje");
var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var lenguaje = document.getElementById("lenguaje");
var descripcion = document.getElementById("descripcion");
formulario.addEventListener("submit", function (evento) {
    //Ocultar formulario y mostrar mensaje
    formulario.style.display = "none";
    mensaje.style.display = "block";
    mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted."; //muesta el mensaje
    mensaje.style.color = "#ff0000";
    mensaje.style.textAlign = "center";
    mensaje.style.border = "1px solid black";
    mensaje.style.padding = "5px";
    evento.preventDefault();
});
function limpiarDatos() {
    document.getElementById("formulario").reset();
}
