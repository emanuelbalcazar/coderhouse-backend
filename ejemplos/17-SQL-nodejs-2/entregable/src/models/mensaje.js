const knex = require('../database/knex');

class Mensaje {

    constructor() { }

    async guardar(mensaje) {
        try {
            let resultado = await knex('mensajes').insert(mensaje);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async buscar(condicion) {
        try {
            let mensajes = await knex('mensajes').where(condicion);
            return mensajes;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new Mensaje();