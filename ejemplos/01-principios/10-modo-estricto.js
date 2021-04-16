/**
 * ejemplo del uso del modo estricto en javascript
 * permite tener mas control sobre la semantica del lenguaje
 * se lo recomienda para evitar errores ocultos en el codigo
 */
"use strict"

var i = 1; // que pasa si quito el var?
console.log(i);

// si el objeto tiene el atributo writable en falso, no puedo sobreescribir su valor.
let object = Object.create(null, { x: { value: 1, writable: true } });
object.x = 2;

console.log('objeto estatico', object.x);
