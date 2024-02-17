function calcularIMC(event) {
    event.preventDefault();
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var unidad = document.getElementById("unidad").value;

    if (!isNaN(peso) && !isNaN(altura) && altura > 0 && peso > 0) {
        var imc;
        var resultado = "";

        if (unidad === "metrico") {
           
            imc = peso / Math.pow(altura / 100, 2); // Convertir altura a metros
        } else {
            
            imc = (peso / Math.pow(altura, 2)) * 703; // Convertir altura a pulgadas
        }

        if (imc < 16) {
            resultado = "Bajo peso";
        } else if (imc >= 16 && imc <= 18.49) {
            resultado = "Delgadez";
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado = "Peso normal";
        } else if (imc >= 25 && imc <= 26) {
            resultado = "Sobrepeso";
        } else if (imc >= 26 && imc <= 29.9) {
            resultado = "Obesidad tipo 1";
        } else if (imc >= 30 && imc <= 34.9) {
            resultado = "Obesidad tipo 2";
        } else if (imc >= 35 && imc <= 39.9) {
            resultado = "Obesidad tipo 1";
        } else {
            resultado = "Obesidad mórbida";}

        document.getElementById("resultado").innerText = "Tu IMC es: " + imc.toFixed(2) + ". " + resultado;
        cambiarImagen()
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
function cambiarImagen() {
    document.getElementById("imagen").src = "img/pulgar.png";
}