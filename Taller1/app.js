let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 120;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario && (0 < numeroDeUsuario) &&( numeroDeUsuario < numeroMaximo+1 ) ) {
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Adivinaste mi edad en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','Mi edad es menor');
        } else {
            asignarTextoElemento('p','Mi edad es mayor');
        }
        intentos++;
        limpiarCaja();
    }}
    else {asignarTextoElemento('p', 'Adivina mi edad con un número válido del 1 al 120');
    alert('Escriba un número válido del 1 al 120')}
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo);

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya probaste todas las posibilidades');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','¡Soy de otro planeta, adivina mi edad en años terrestres!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    limpiarCaja();
    asignarTextoElemento('p', `Adivina mi edad con un número válido del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
    document.getElementById('reiniciar').setAttribute('disabled', 'false');
}


condicionesIniciales();

