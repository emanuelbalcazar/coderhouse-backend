angular.module('app').factory('utils', [utils]);

/**
 * Servicio de utileria.
 * Se pueden declarar servicios que sean de ayuda para los controladores.
 */
function utils() {

    // colores definidos para los tipos de nodos
    var colors = {
        'start': '#9FF781',
        'error': '#FE2E2E'
    };

    /**
     * Servicios disponibles
     * @type {Object}
     */
    var service = {
        objectToArray: objectToArray,
        getColor: getColor
    }

    return service;

    /**
     * Convierte un objecto a arreglo
     * @param {Object} obj
     * @return {Array} arreglo
     */
    function objectToArray(obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    }

    /**
     * Retorna el codigo del color segun el tipo de nodo.
     * @param {String} type tipo de nodo
     */
    function getColor(type) {
        return colors[type] || null;
    }

} // fin servicio.
