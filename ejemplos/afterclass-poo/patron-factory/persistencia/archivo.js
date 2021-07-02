class Archivo {

    constructor() {}

    leer() {
        console.log('leyendo en archivo')
    }

    guardar(obj) {
        console.log('guardado en archivo', obj);
    }
}

module.exports = Archivo;