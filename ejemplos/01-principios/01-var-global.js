/**
 * ejemplo de una variable global y su alcance, se reemplaza su valor dentro de la funcion
 * tener mucho cuidado! no es recomendable manejar variables globales
 */
var i = "global";

function foo() {
    i = "local";
    console.log(i); // imprime local
}

foo();
console.log(i) // imprime local
