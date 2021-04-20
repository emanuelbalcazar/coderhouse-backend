/**
 * ejemplod de dotAll
 * bandera que permite que el caracter punto (.) de una expresion regular
 * haga match incluso con los caracteres de fin de linea mediante la bandera "/s"
 */

const resultado = /foo.bar/.test('foo\nbar');
console.log(resultado); // false

const resultado2 = /foo.bar/s.test('foo\nbar');
console.log(resultado2); // true
