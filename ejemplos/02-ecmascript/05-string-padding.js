/**
 * ejemplo de uso de String padding
 * rellena una cadena actual con una cadena dada de modo que alcance una longitud determinada
 * padStart() rellena desde el inicio de la cadena
 * padEnd() rellena aplicando desde el final de la cadena
 */

// ejemplos padStart()
console.log('abc'.padStart(10));
console.log('abc'.padStart(10, 'foo'));
console.log('abc'.padStart(6, '123456'));

console.log('5'.padStart(2, '0'));

const numero = "2034399002125581";
const ultimos4Digitos = numero.slice(-4);
const mascara = ultimos4Digitos.padStart(numero.length, '*');
console.log(mascara);

// ejemplos de padEnd()
console.log('abc'.padEnd(10));
console.log('abc'.padEnd(10, 'foo'));
console.log('abc'.padEnd(6, '123456'));
console.log('abc'.padEnd(1));

const cadena = 'Breaded Mushrooms';
console.log(cadena.padEnd(25, '.'));

const cadena2 = '200';
console.log(cadena2.padEnd(5));
