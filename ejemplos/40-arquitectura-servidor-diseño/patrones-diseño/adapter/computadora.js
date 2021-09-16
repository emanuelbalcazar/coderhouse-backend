const IConectable = require('./IConectable');

class Computadora extends IConectable {

    constructor() {
        super();
        this.encendido = false;
    }

    encender() {
        this.encendido = true;
        console.log('Computadora encendida?:', this.encendido);
    }

    apagar() {
        this.encendido = false;
        console.log('Computadora encendida?:', this.encendido);
    }
}

module.exports = new Computadora();