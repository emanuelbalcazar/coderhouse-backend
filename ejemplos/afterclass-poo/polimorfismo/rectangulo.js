const Figura = require('./figura');

class Rectangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    area() {
        return `area rectangulo: ${this.base * this.altura}`;
    }
}

module.exports = Rectangulo;