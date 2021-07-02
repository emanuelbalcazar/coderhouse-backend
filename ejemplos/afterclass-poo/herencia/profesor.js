const Persona = require('./persona');

class Profesor extends Persona {

    constructor(nombre, apellido, edad, curso) {
        super(nombre, apellido, edad);
        this.curso = curso;
    }

    getCurso() {
        return this.curso;
    }
}

module.exports = Profesor;