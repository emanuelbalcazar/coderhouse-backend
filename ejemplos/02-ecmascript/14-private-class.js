/**
 * ejemplo de uso de propiedades privadas de una clase
 * se pueden definir propiedades privadas utilizando el prefijo hash #
 */
class Privada {
    #privateField

    constructor() {
        this.#privateField = 42;
        this.#randomField = 666; // syntax error
    }
}

const instancia = new Privada();
instancia.#privateField === 42 // syntax error
