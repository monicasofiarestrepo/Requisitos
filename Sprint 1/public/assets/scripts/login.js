//Ejecutando funcione
document.getElementById("btn__registrarse").addEventListener("click", function() {
    window.location.href ="/registro";
});
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__historial").addEventListener("click", historial);
window.addEventListener("resize", anchoPage);



//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var formulario_historial =document.querySelector(".formulario__historial")
var contenedor_login_register = document.querySelector(".contenedor__login-register-imc");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");
var caja_trasera_historial = document.querySelector(".caja__trasera-historial");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
        caja_trasera_historial.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        caja_trasera_historial.style.display = "none";
        formulario_login.historial.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";  
    }
}

anchoPage();

   