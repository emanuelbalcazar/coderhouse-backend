/**
 * Desafio generico - 5 minutos
 * Crear un proyecto en nodejs que genere 10000 numeros aleatorios en el
 * rango de 1 a 20.
 * Crear un objeto cuyas claves sean los numeros salidos y el valor asociado sea
 * la cantidad de veces que salio dicho numero.
 * Representar por consola los resultados.
 */

let valores = {};

function obtenerRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// completar el codigo...

