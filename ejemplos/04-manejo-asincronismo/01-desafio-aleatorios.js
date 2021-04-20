/**
 * Realizar una funcion que devuelva numeros aleatorios entre un minimo y maximo
 * configurable y que muestre la cantidad de valores que vamos solicitando junto a la
 * fecha y hora del pedido.
 * AVISO: No se permite usar variables globales ni contadores para mantener el contador.
 */
function obtenerRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// completar el codigo...

