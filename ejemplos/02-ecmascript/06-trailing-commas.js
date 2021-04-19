/**
 * ejemplo uso de trailing commas
 * pueden ser utiles para agregar nuevos elementos, parametros o propiedades al codigo
 */

var arreglo = [1, 2, 3, ];
console.log(arreglo, arreglo.length);

var objeto = {
    foo: 'bar',
    bar: 'qwerty',
    age: 42,
};

// tambien se permite en funciones
function f(p) {}
function f(p,) {}
(p) => {}
(p,) => {}
