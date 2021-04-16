/**
 * ejemplo de una funcion closure
 * es una funcion que guarda referencias del estado adyacente
 */
function crearFuncion() {
    var nombre = "closure";

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

var miFuncion = crearFuncion(); // ahora miFuncion, tiene acceso a las variables internas de crearFuncion
miFuncion(); // ahora es de tipo closure
