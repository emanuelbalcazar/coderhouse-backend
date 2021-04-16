/**
 * ejemplo de uso de la funcion Object.values en js
 * devuelve un array con los valores a las propiedades enumerables de un objeto
 */
const object = {
    a: 'somestring',
    b: 42,
    c: false
};

// valores del objeto
console.log(Object.values(object));

// array como objeto
const object1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(object1));

// array como objeto con una ordenacion aleatoria de las claves
const object2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(object2));

// getFoo no es una propiedad enumerable, por lo que no se devuelve
const object3 = Object.create({}, { getFoo: { value: function () { return this.foo; } } });
object3.foo = 'bar';
console.log(Object.values(object3));

// los parametros que no son objetos se fuerzan a que se comporten como tal
console.log(Object.values('foo'));
