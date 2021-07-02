class Memoria {

    constructor() {}

    leer() {
        console.log('leyendo en memoria')
    }

    guardar(obj) {
        console.log('guardado en memoria', obj);
    }
}

module.exports = Memoria;