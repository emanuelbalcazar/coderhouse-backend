const Figura = require('./figura');

class Cuadrado extends Figura {

    constructor(lado) {
        super();
        this.lado = lado;
    }

    area() {
        return `area cuadrado: ${this.lado * this.lado}`;
    }
}

module.exports = Cuadrado;