function calcularIMC(event) {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var unidad = document.getElementById("unidad").value;

    if (!isNaN(peso) && !isNaN(altura) && altura > 0 && peso > 0) {
        var imc;
        var resultado = "";

        if (unidad === "metrico" && altura>100 && altura<250 && peso>30 && peso<300){
            imc = peso / Math.pow(altura / 100, 2); // Convertir altura a metros  
            mostrarIMC(imc);
        }else if (unidad === "imperial" && altura>39.4 && altura<98.4 && peso >66.1 && peso< 661.3){
            imc = (peso / Math.pow(altura, 2)) * 703; // Convertir altura a pulgadas
            mostrarIMC(imc);
        }else{
            document.getElementById("resultado").innerText = "Por favor, ingresa un peso y una altura válidos.";
        }
    } else {
        document.getElementById("resultado").innerText = "Por favor, ingresa un peso y una altura válidos.";
    }
}
document.getElementById("peso").addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        calcularIMC(event);
    }
});

document.getElementById("form").addEventListener("submit", calcularIMC);

function cambiarImagen(img_src) {
    document.getElementById("imagen").src = img_src;
}

function mostrarIMC(imc){
    if (imc < 16) {
        resultado = "Bajo peso";
        cambiarImagen("img/esqueleto.png");
    } else if (imc >= 16 && imc <= 18.49) {
        resultado = "Delgadez";
        cambiarImagen("img/esqueleto.png");
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "Peso normal";
        cambiarImagen("img/pulgar.png");
    } else if (imc >= 25 && imc <= 26) {
        resultado = "Sobrepeso";
        cambiarImagen("img/snorlax.png");
    } else if (imc >= 26 && imc <= 29.9) {
        resultado = "Obesidad tipo 1";
        cambiarImagen("img/snorlax.png");
    } else if (imc >= 30 && imc <= 34.9) {
        resultado = "Obesidad tipo 2";
        cambiarImagen("img/snorlax.png");
    } else if (imc >= 35 && imc <= 39.9) {
        resultado = "Obesidad tipo 1";
        cambiarImagen("img/snorlax.png");
    } else {
        resultado = "Obesidad mórbida";
        cambiarImagen("img/snorlax.png");
    }   
    document.getElementById("resultado").innerText = "Tu IMC es: " + imc.toFixed(2) + ". " + resultado; 
}