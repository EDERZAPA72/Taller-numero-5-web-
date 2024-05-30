class Evento{
    constructor(fechaHora,descripcion,participantes){
        this.fechaHora = fechaHora
        this.descripcion = descripcion
        this.participantes = participantes
    }
}

function guardarEvento() {
    var fechaHora = document.getElementById("fechaHora")
    var descripcion = document.getElementById("descripcion")
    if (!fechaHora.value || !descripcion.value) {
        alert("Por favor, complete todos los campos obligatorios (fecha y descripción).")
        nuevoEvento()
    }

    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    const tabla = document.getElementById('tablaParticipantes');
    const filas = tabla.getElementsByTagName('tr');
    const participantes = [];

    for (let i = 1; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName('td');
        if (celdas.length > 0) {
            const nombre = celdas[0].textContent;
            participantes.push(nombre);
        }
    }

    var evento = new Evento(fechaHora.value, descripcion.value, participantes)
    eventos.push(evento)
    localStorage.setItem('eventos', JSON.stringify(eventos));
    nuevoEvento()
}

function actualizarEvento() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]");

    var fechaHora = document.getElementById("fechaHora").value;
    var descripcion = document.getElementById("descripcion").value;
    var participantes = [];

    var tabla = document.getElementById('tablaParticipantes');
    var filas = tabla.getElementsByTagName('tr');
    for (let i = 1; i < filas.length; i++) {
        participantes.push(filas[i].cells[0].textContent);
    }

    var indiceEvento = -1;
    for (let i = 0; i < eventos.length; i++) {
        if (eventos[i].fechaHora == fechaHora && eventos[i].descripcion == descripcion) {
            indiceEvento = i;
            break;
        }
    }

    if (indiceEvento !== -1) {
        eventos[indiceEvento].participantes = participantes;
        localStorage.setItem("eventos", JSON.stringify(eventos));
    }
    nuevoEvento()
}

function eliminarEvento() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]");

    var fechaHora = document.getElementById("fechaHora").value;

    var indiceEvento = -1;
    for (let i = 0; i < eventos.length; i++) {
        if (eventos[i].fechaHora == fechaHora) {
            indiceEvento = i;
            break;
        }
    }

    if (indiceEvento !== -1) {
        var confirmacion = confirm("¿Está seguro de que desea eliminar este evento?");
        if (confirmacion) {
            eventos.splice(indiceEvento, 1);
            localStorage.setItem("eventos", JSON.stringify(eventos));
            nuevoEvento();
        }
    }
}

function consultarEvento() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]");

    var fechaHora = document.getElementById("fechaHora").value;
    var eventoEncontrado = false;

    for (let i = 0; i < eventos.length; i++) {
        if (eventos[i].fechaHora == fechaHora ) {
            eventoEncontrado = true;
            document.getElementById('descripcion').textContent = eventos[i].descripcion

            var tabla = document.getElementById('tablaParticipantes');
            tabla.innerHTML = '<tr><td>Participantes</td><td>Acciones</td></tr>';
            for (let j = 0; j < eventos[i].participantes.length; j++) {
                var fila = tabla.insertRow(-1);
                fila.insertCell(0).appendChild(document.createTextNode(eventos[i].participantes[j]));
                var columnaAcciones = fila.insertCell(1);
                var botonEliminar = document.createElement('button');
                botonEliminar.textContent = 'Eliminar';
                botonEliminar.addEventListener('click', function () {
                    fila.remove();
                });
                columnaAcciones.appendChild(botonEliminar);
            }
            break;
        }
    }
    if (!eventoEncontrado) {
        alert('No hay eventos creados en esta fecha.');
    }
}

function listarEventos() {
    var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")

    const listaMeses = document.getElementById('listarEventos');
    listaMeses.innerHTML = '';

    eventos.forEach(evento => {
        const li = crearNodo("li")
        li.textContent = evento.fechaHora
        listaMeses.appendChild(li);
    });


}

function nuevoEvento() {
    document.getElementById("fechaHora").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("nombreTematico").value = "";
    document.getElementById("tablaParticipantes").innerHTML = '<caption>Participantes adicionados</caption><tr><td>Participantes</td><td>Acciones</td></tr>';
    document.getElementById("fechaHora").focus();
}
