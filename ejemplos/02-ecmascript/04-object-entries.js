/**
 * ejemplo de uso de Object.entries()
 * devuelve una matriz de pares de una propiedad enumerable [key, value]
 */
var obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array de objetos
var arrayObj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(arrayObj)); // [ [ '0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array de objetos con ordenamiento aleatorio
var arrayRan = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(arrayRan)); // [ [ '2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo es una propiedad no enumerable
var myObj = Object.create({}, { getFoo: { value: function () { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar' ] ]

console.log(Object.entries('foo')); // [ [ '0', 'f' ], [ '1', 'o' ], [ '2', 'o' ] ]

// iterando sobre la clave-valor del objeto
var obj2 = { a: 5, b: 7, c: 9 };
for (var [key, value] of Object.entries(obj2)) {
    console.log(key + ' ' + value);
}

// lo mismo pero utilizando arreglos
Object.entries(obj2).forEach(([key, value]) => {
    console.log(key + ' ' + value);
});
