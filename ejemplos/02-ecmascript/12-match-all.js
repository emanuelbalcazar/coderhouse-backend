/**
 * ejemplo del metodo String.matchAll
 * retorna un iterador de todos los resultados de ocurrencia
 * en una cadena de texto contra una expresion regular
 */

const regexp = /t(e)(st(\d?))/g;
const cadena = 'test1test2';

const arreglo = [...cadena.matchAll(regexp)];

console.log(arreglo[0]);

console.log(arreglo[1]);
