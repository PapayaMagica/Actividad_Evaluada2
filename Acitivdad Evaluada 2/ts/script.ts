let mensaje:any=document.getElementById("mensaje");
let formulario=document.getElementById("formulario");

let nombre=document.getElementById("nombre");
let apellidos=document.getElementById("apellidos");
let rut=document.getElementById("rut");
let email=document.getElementById("email");
let telefono=document.getElementById("telefono");
let lenguaje=document.getElementById("lenguaje");
let descripcion=document.getElementById("descripcion");

formulario.addEventListener("submit",function(evento)
{
    //Ocultar formulario y mostrar mensaje
    formulario.style.display="none"; 
    mensaje.style.display="block";
    mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted."; //muesta el mensaje
    mensaje.style.color="#ff0000";
    mensaje.style.textAlign="center";
    mensaje.style.border= "1px solid black";
    mensaje.style.padding="5px";
    evento.preventDefault();    
})

function limpiarDatos()
{
    document.getElementById("formulario").reset();
}

