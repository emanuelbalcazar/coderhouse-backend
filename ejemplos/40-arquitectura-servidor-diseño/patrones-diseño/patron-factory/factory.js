class PersistenciaFactory {

    constructor() { }

    getPersistencia(tipo) {
        try {
            let modulo = require(`./persistencia/${tipo}`);
            return modulo
        } catch (error) {
            console.log('No se encontro el tipo de persistencia:', nombre, error);
        }
    }
}

module.exports = new PersistenciaFactory();