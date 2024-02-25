document.addEventListener('DOMContentLoaded', function() {
    // Obtén el botón de registro por su ID
    var botonRegistro = document.getElementById('button_registro');
    
    // Obtén el formulario de registro por su clase
    var formularioRegistro = document.querySelector('.formulario_registro');
    
    // Obtén la caja trasera de registro por su clase
    var cajaTraseraRegistro = document.querySelector('.caja_trasera-registro');

    var contenedorlore = document.querySelector(".contenedor_login-registro");

    var casatrasera = document.querySelector(".caja_trasera")
    
    // Define la función que se ejecutará cuando se haga clic en el botón de registro
    function mostrarRegistro() {
        // Verifica si los elementos existen para evitar errores
       
        if(formularioRegistro && cajaTraseraRegistro) {
            formularioRegistro.style.display = 'block'; // Muestra el formulario de registro
            cajaTraseraRegistro.style.display = 'none'; // Oculta la caja trasera
        }
    }
    
    // Añade el evento click al botón de registro
    botonRegistro.addEventListener('click', mostrarRegistro);
});