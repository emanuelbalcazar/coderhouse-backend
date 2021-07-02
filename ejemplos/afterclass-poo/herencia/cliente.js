const Persona = require('./persona');

class Cliente extends Persona {

    constructor(nombre, apellido, edad, nroCliente) {
        super(nombre, apellido, edad);
        this.nroCliente = nroCliente;
    }

    getNroCliente() {
        return this.nroCliente;
    }
}

module.exports = Cliente;