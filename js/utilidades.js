
function crearNodo(tipoNodo) {
    var nodo = document.createElement(tipoNodo)
    return nodo
}

function crearNodoConTexto(tipoNodo, textoNodo) {
    var nodo = document.createElement(tipoNodo)
    var textoNodo = document.createTextNode(textoNodo)
    nodo.appendChild(textoNodo)
    return nodo
}

function crearNodoImagen(nombreImagen, alt) {
    var nodo = crearNodo("img")
    nodo.src = directorioImagenes + nombreImagen
    nodo.alt = alt
    return nodo
}

function adicionarNodoABody(nodo) {
    document.body.appendChild(nodo)
}

function adicionarNodoAContenedor(nodo, contenedor) {
    contenedor.appendChild(nodo)
}

function crearAnio() {
    var enero = crearNodoConTexto("h3", "Enero")
    var febrero = crearNodoConTexto("h3", "Febrero")
    var marzo = crearNodoConTexto("h3", "Marzo")
    var abril = crearNodoConTexto("h3", "Abril")
    var Mayo = crearNodoConTexto("h3", "Mayo")
    var junio = crearNodoConTexto("h3", "Junio")
    var julio = crearNodoConTexto("h3", "Julio")
    var agosto = crearNodoConTexto("h3", "Agosto")
    var septiembre = crearNodoConTexto("h3", "septiembre")
    var octubre = crearNodoConTexto("h3", "Octubre")
    var noviembre = crearNodoConTexto("h3", "Noviembre")
    var diciembre = crearNodoConTexto("h3", "Diciembre")

    var divEnero = crearNodo("div")
    var divFebrero = crearNodo("div")
    var divMarzo = crearNodo("div")
    var divAbril = crearNodo("div")
    var divMayo = crearNodo("div")
    var divJunio = crearNodo("div")
    var divJulio = crearNodo("div")
    var divAgosto = crearNodo("div")
    var divSeptiembre = crearNodo("div")
    var divOctubre = crearNodo("div")
    var divNoviembre = crearNodo("div")
    var divDiciembre = crearNodo("div")

    adicionarNodoAContenedor(enero, divEnero)
    adicionarNodoAContenedor(febrero, divFebrero)
    adicionarNodoAContenedor(marzo, divMarzo)
    adicionarNodoAContenedor(abril, divAbril)
    adicionarNodoAContenedor(Mayo, divMayo)
    adicionarNodoAContenedor(junio, divJunio)
    adicionarNodoAContenedor(julio, divJulio)
    adicionarNodoAContenedor(agosto, divAgosto)
    adicionarNodoAContenedor(septiembre, divSeptiembre)
    adicionarNodoAContenedor(octubre, divOctubre)
    adicionarNodoAContenedor(noviembre, divNoviembre)
    adicionarNodoAContenedor(diciembre, divDiciembre)

    var anio = crearNodo("div")

    adicionarNodoAContenedor(divEnero, anio)
    adicionarNodoAContenedor(divFebrero, anio)
    adicionarNodoAContenedor(divMarzo, anio)
    adicionarNodoAContenedor(divAbril, anio)
    adicionarNodoAContenedor(divMayo, anio)
    adicionarNodoAContenedor(divJunio, anio)
    adicionarNodoAContenedor(divJulio, anio)
    adicionarNodoAContenedor(divAgosto, anio)
    adicionarNodoAContenedor(divSeptiembre, anio)
    adicionarNodoAContenedor(divOctubre, anio)
    adicionarNodoAContenedor(divNoviembre, anio)
    adicionarNodoAContenedor(divDiciembre, anio)

    anio.setAttribute("class", "divAnio")

    var divPrincipal = document.getElementById("divPrincipal")
    var nuevoDiv = anio
    nuevoDiv.id = "nuevoDivId"
    divPrincipal.appendChild(nuevoDiv)
}


var eventos = JSON.parse(localStorage.getItem("eventos") || "[]")
    var fechasHoras = []

    for (let i = 0; i < eventos.length; i++) {
        fechasHoras.push(eventos[i].fechaHora)
    }

function crearMes() {

    var listaOrdenada = crearNodo("ol")

    var lunes = crearNodoConTexto("li", "Lunes")
    var martes = crearNodoConTexto("li", "Martes")
    var miercoles = crearNodoConTexto("li", "Miercoles")
    var jueves = crearNodoConTexto("li", "Jueves")
    var viernes = crearNodoConTexto("li", "Viernes")
    var sabado = crearNodoConTexto("li", "Sabado")
    var domingo = crearNodoConTexto("li", "Domingo")

    adicionarNodoAContenedor(lunes, listaOrdenada)
    adicionarNodoAContenedor(martes, listaOrdenada)
    adicionarNodoAContenedor(miercoles, listaOrdenada)
    adicionarNodoAContenedor(jueves, listaOrdenada)
    adicionarNodoAContenedor(viernes, listaOrdenada)
    adicionarNodoAContenedor(sabado, listaOrdenada)
    adicionarNodoAContenedor(domingo, listaOrdenada)

    for (let i = 1; i < 31; i++) {
        let variableName = `variable${i}`
        window[variableName] = crearNodoConTexto("li", i.toString())
        fechasHoras.forEach(fechaHora => {
            const fechaMes = new Date(fechaHora);
            var mes = fechaMes.getMonth() + 1;
            var dia = fechaMes.getDate();
            if (mes === 6 && dia === i) {
                var salto = crearNodo("br")
                adicionarNodoAContenedor(salto, window[variableName])
                var evento = crearNodoConTexto("a", "Fecha y hora de evento: "+ fechaHora)
                evento.setAttribute("href", "#")
                evento.setAttribute("class", "estiloEvento")
                adicionarNodoAContenedor(evento, window[variableName])

            }
        });

        adicionarNodoAContenedor(window[variableName], listaOrdenada)

    }
    variable1.setAttribute("class", "primerDiaMes")
    var divMeses = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divMeses)

    divMeses.setAttribute("class", "divMeses")

    var divPrincipal = document.getElementById("divPrincipal")
    divMeses.id = "nuevoDivId"
    divPrincipal.appendChild(divMeses)
    var nombreMes = document.getElementById("textMes")
    nombreMes.textContent = "Junio"
}
function crearDias() {
    var listaOrdenada = crearNodo("ol")
    for (let i = 1; i < 13; i++) {
        let variableName = 'variable${i}'
        window[variableName] = crearNodoConTexto("li", i.toString() + " am")

        adicionarNodoAContenedor(window[variableName], listaOrdenada)

    }

    for (let i = 1; i < 13; i++) {
        let variableName = `variable${i + 12}`
        window[variableName] = crearNodoConTexto("li", i.toString() + " pm")

        adicionarNodoAContenedor(window[variableName], listaOrdenada)

    }

    var divDias = crearNodo("div")
    adicionarNodoAContenedor(listaOrdenada, divDias)
    divDias.setAttribute("class", "divDias")
    var divPrincipal = document.getElementById("divPrincipal")
    var nuevoDiv = divDias
    nuevoDiv.id = "nuevoDivId"
    divPrincipal.appendChild(nuevoDiv)
}
