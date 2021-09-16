class IConectable {
    constructor() {

    }

    encender() {
       throw new Error('encender() debe ser implementado');
    }

    apagar() {
        throw new Error('apagar() debe ser implementado');
    }
}

module.exports = IConectable;