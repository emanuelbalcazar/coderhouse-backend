/**
 * ejemplo de una funcion recibida como parametro
 * tambien es posible devolver una funcion como resultado de otra funcion
 * las posibilidades son ilimitadas!
 */
let array = [1, 2, 3, 4];

let imprimir = function (elemento) {
    console.log(elemento);
}

array.forEach(imprimir);
