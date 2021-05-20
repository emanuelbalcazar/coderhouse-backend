import * as operaciones from './lib/operaciones';

const mensaje: string = "Hola typescript!";
console.log(mensaje);

let num1: number = 10, num2: number = 5;

console.log(`la suma de  ${num1} y ${num2} es ${operaciones.sumar(num1, num2)}`);
console.log(`la resta de  ${num1} y ${num2} es ${operaciones.restar(num1, num2)}`);
console.log(`la multiplicacion de  ${num1} y ${num2} es ${operaciones.mult(num1, num2)}`);
console.log(`la division de  ${num1} y ${num2} es ${operaciones.div(num1, num2)}`);
