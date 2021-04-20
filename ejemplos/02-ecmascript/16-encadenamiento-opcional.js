/**
 * el operador de encadenamiento opcional permite leer el valor de una propiedad
 * ubicada dentro de una cadena de objetos conectados sin tener que validar
 * expresamente que cada referencia en la cadena sea vacia
 */

const aventurero = {
    nombre: "Emanuel",
    gato: {
        nombre: "Dina"
    }
};

const perro = aventurero.perro?.nombre;
console.log(perro); // undefined

console.log(aventurero.cualquierMetodo?.()); // undefined
