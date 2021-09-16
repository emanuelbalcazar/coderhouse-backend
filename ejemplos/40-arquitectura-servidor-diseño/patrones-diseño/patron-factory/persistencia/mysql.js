class MySql {

    constructor() {}

    leer() {
        console.log('leyendo en mysql')
    }

    guardar(obj) {
        console.log('guardado en mysql', obj);
    }
}

module.exports = MySql;