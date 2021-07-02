const Figura = require('./figura');

class Circulo extends Figura {

    constructor(radio) {
        super();
        this.radio = radio;
    }

    area() {
        return `area circulo: ${Math.PI * (this.radio ** 2)}`;
    }
}

module.exports = Circulo;