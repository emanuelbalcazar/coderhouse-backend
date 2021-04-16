/**
 * ejemplo de una variable local y su alcance con respecto a una global
 */
var i = "global";

function foo() {
    // otra variable local solo para esta funcion
    var i = "local";
    console.log(i); // imprime local
}

foo();
console.log(i); // imprime global
