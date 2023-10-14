function crearNodo(tipoNodo) {
    var nodo = document.createElement(tipoNodo);
    return nodo;

    // return document.createElement(tipoNodo);

}

function crearNodoTexto(tipoNodo, texto) {
    var nodo = document.createElement(tipoNodo);
    var textoNodo = document.createTextNode(texto);
    nodo.appendChild(textoNodo);
    return nodo;
}

function adicionarNodoBody(nodo) {
    document.body.appendChild(nodo);
}

function crearNodoImagen(url, alt) {
    var nodo = crearNodo("img");
    nodo.src = url;
    nodo.alt = alt;
    nodo.width = 300;

    return nodo;
}

function adicionarNodoContenedor(contenedor, nodo) {
    contenedor.appendChild(nodo);
}

function crearNodoA(texto, href) {
    var nodo = crearNodoTexto("a", texto);
    nodo.href = href
    return nodo;
}
//---------------------------------------------------------------
function crearTabla(filas, columnas) {
    var tabla = crearNodo("table");
    for (var i = 0; i < filas; i++) {
        var fila = crearNodo("tr");
        for (var j = 0; j < columnas; j++) {
            var celda = crearNodo("td");
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    return tabla;
}