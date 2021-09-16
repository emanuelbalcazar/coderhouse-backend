const IConectable = require('./IConectable');
const LamparaInglesa = require('./lampara-inglesa');

class AdaptadorLampara extends IConectable {
    
    constructor() {
        super();
        this.lampara = LamparaInglesa;
    }

    encender() {
        this.lampara.on();
    }

    apagar() {
        this.lampara.off();
    }
}

module.exports = new AdaptadorLampara();