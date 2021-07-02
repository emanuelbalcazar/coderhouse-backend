const Cuadrado = require('./cuadrado');
const Circulo  = require('./circulo');
const Rectangulo = require('./rectangulo');

let cuadrado1 = new Cuadrado(2);
let cuadrado2 = new Cuadrado(3);
let circulo1 = new Circulo(2);
let circulo2 = new Circulo(5);
let rectangulo1 = new Rectangulo(2, 3);
let rectangulo2 = new Rectangulo(3, 4);

const figuras = [cuadrado1, cuadrado2, circulo1, circulo2, rectangulo1, rectangulo2];

figuras.forEach(figura => {
    console.log(figura.area());
});