/**
 * desarrollar la funcion mostrarLetras que reciba un string como
 * parametro y permita mostrar una vez por segundo cada uno de sus
 * caracteres.
 * Tiempo aproximado: 20-25 minutos
 */

const esperar = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

const mostrarLetras = async (cadena, tiempo, callback) => {
    // completar el codigo
}

// llamar a las funciones con 0, 250 y 500 ms
mostrarLetras('bienvenidos', 0, fin).then(result => { });
mostrarLetras('curso', 500, fin).then(result => { });
mostrarLetras('coderhouse', 1000, fin).then(result => { });
