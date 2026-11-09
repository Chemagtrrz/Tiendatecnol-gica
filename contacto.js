const formContacto = document.getElementById('formContacto');
const respuesta = document.getElementById('respuesta');
    
formContacto.addEventListener('submit', function (event) {
        event.preventDefault();
        let nombre = document.getElementById("nombre").value.trim();
        let correo =document.getElementById("correo").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();
       
        formContacto.reset();
        mostraMesaje("Gracias por contactarnos, "+ nombre +"Te responderemos a la brevedd. ","exito");
    });
    formContacto.addEventListener("reset", function(event){
        respuesta.textContent = "";
        respuesta.className = "";
    });
    function mostrarMensaje(texto, tipo){
        respuesta.textContent = texto;
        respuesta.className = tipo;
    }