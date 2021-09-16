const IConectable = require('./IConectable');

class Lampara extends IConectable {
    
    constructor() {
        super();
        this.encendido = false;
    }

    encender() {
        this.encendido = true;
        console.log('Lampara encendida?:', this.encendido);
    }

    apagar() {
        this.encendido = false;
        console.log('Lampara encendida?:', this.encendido);
    }
}

module.exports = new Lampara();