const chalk = require('chalk');

/* clase a testear */
class Calculadora {
    static sumar(a, b) {
        return a + b;
    }
}

/* funcion de assert, normalmente se usa una libreria */
function assertEquals(expected, result) {
    if (expected === result) {
        console.log(chalk.green('el resultado esperado y recibido son iguales'));
    } else {
        console.log(chalk.red('el resultado esperado y recibido son diferentes'));
    }
}

/* caso de test */
function testSuma() {
    assertEquals(8, Calculadora.sumar(5, 3));
}

testSuma();
