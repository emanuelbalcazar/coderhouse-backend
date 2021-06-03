const Mensaje = require('../models/mensaje');

class MensajeController {

    constructor() { }

    async guardar(mensaje) {
        try {
            return await Mensaje.guardar(mensaje);
        } catch (error) {
            throw error;
        }
    }

    async buscar(condicion) {
        try {
            return await Mensaje.buscar(condicion);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new MensajeController();