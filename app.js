let amigos = [];

function leerNombre() {
    const input = document.getElementById("amigo");
    const nombre = input.value;
    return nombre;
}

function condicionesIniciales() {
    document.getElementById("sortear").disabled = true;
}

function enviarMensaje(mensaje) {
    let lista = document.getElementById("resultado");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = mensaje;
    lista.appendChild(nuevoElemento);
}

function agregarAmigo() {
    let nombreAmigo = leerNombre();
    document.querySelector('#amigo').value = '';

    if (nombreAmigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreAmigo);
        if (amigos.length >= 2) {
            document.getElementById("sortear").disabled = false;
        }
        actualizarListaAmigos();
    }
}

function sortearAmigo() {
    if (amigos.length >= 2) {
        let numeroGenerado = Math.floor(Math.random() * amigos.length);
        enviarMensaje("El amigo secreto ganador es: " + amigos[numeroGenerado]);
    } else {
        alert("Se necesitan al menos dos amigos para realizar el sorteo.");
    }
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

condicionesIniciales();