/**
 * ejemplo de propiedades rest/spread
 * las propiedades rest son para la desestructuracion de objetos
 * las propiedades spread son para la asignacion
 */

// propiedades rest
const { pera, manzana, ...autos } = { pera: 'pera', manzana: 'manzana', policia: 'policia', carrera: 'carrera' };

console.log(pera);
console.log(manzana);
console.log(autos);

// propiedades spread
const cosas = { pera, manzana, ...autos };
console.log(cosas);
